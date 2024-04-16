const Product = require('../models/product.model.js');

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const putProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct,
}


// module.exports = product;