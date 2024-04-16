const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

mongoose.connect("mongodb+srv://workdebtasset:oqERexFps4ml7lyP@bankenddb.pp7xfqy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BankendDB")
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, (req, res, next) => {
        console.log('Server listening on port 3000');
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

app.get('/', (req, res, next) => {
    res.send("Hello, From Node-API Server!");
});