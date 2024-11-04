const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product