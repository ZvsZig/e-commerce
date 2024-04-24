const port = 4000;
const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path')
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect('mongodb+srv://zvszig:957pRpv*@cluster0.gyj9wln.mongodb.net/e-commerce');

//api creation

app.get('/', (req, res) => {
    res.send('Expresss App is Running')
})


app.listen(port, (error) => {
    if(!error) {
        console.log('Server is up and running on port '+port);
    }
    else{
        console.log('Error: '+error)
    }
})