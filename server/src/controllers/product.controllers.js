const mongoose = require('mongoose');
const Product = require('../models/product.models');

const getProducts = async (req, res) => {
    try {
        const data = await Product.find({});
        res.status(200).json({ success: true, data: data })
    } catch (error) {
        console.error(`Error in fetching products: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

const createProduct = async (req, res) => {
    const data = req.body;

    if (!data.title || !data.price || !data.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const product = new Product(data)
    try {
        await product.save();
        res.status(201).json({ success: true, data: product })
    } catch (error) {
        console.error(`Error in create product: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

const removeProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (error) {
        console.error(`Error in deleting product: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        const data = await Product.findById(id);
        res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.error(`Error in fetching products: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

module.exports = {
    getProducts,
    createProduct,
    removeProduct,
    getProduct
}