const port = 4000;
const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect('mongodb+srv://zvszig:957pRpv*@cluster0.gyj9wln.mongodb.net/e-commerce');

app.use('/api', require('./controllers/api.js'));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'dist/admin/index.html')))
app.use('/', express.static(path.join(__dirname, 'dist/admin')));
app.use('/', express.static(path.join(__dirname, 'dist/frontend')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/frontend/index.html')))

app.listen(port, (error) => {
    if(!error) {
        console.log('Server is up and running on port '+port);
    }
    else{
        console.log('Error: '+error)
    }
})
