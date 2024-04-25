const port = 4000;
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path')
const express = require('express');
const app = express.Router();

const Product = require('../models/product.js');
const Users = require('../models/users.js');


app.get('/', (req, res) => {
    res.send('Expresss App is Running')
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

//Creating Upload Endpoint for Images

app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success:1,
        image_url: `/api/images/${req.file.filename}`
    })
})


app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({
        success: true,
        name: req.body.name,
    })
})

//Creating api for deleting products

app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log('Removed')
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating api for getting all products
app.get('/allproducts', async(req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


// Creating endpoint for user registration
app.post('/signup', async(req, res) => {
    let check = await Users.findOne({email: req.body.email});
    if (check){
        //prevents same email from signing up
        return res.status(400).json({success:false, errors:"User already exists"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true, token})
})

//Creating endpoint for user login
app.post('/login', async(req, res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user){
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token});
        }
        else{
            res.json({success: false, errors: "Invalid Password"});
        }
    }
    else{
        res.json({success: false, errors: "Invalid Email"});
    }
})

//creating middleware to fetch user
const fetchUser = async(req, res, next) => {
    const token = req.header('auth-token');
    if (!token){
        res.static(401).send({errors:'Please authenticate using a valid token'});
    }
    else{
        try{
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:'Please authenticate using a valid token'});
        }
    }
}

//Creating endpoint for adding product to cart
app.post('/addtocart', fetchUser,async(req, res) => {
    console.log('added', req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.send('Added')
})


//Creating endpoint for removing product from cart
app.post('/removefromcart', fetchUser, async(req, res) => {
    console.log('removed', req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.send('Removed')
})

//Creating endpoint for getting cart data
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("Get Cart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
    })


module.exports = app;

