const express = require('express');
const router = express.Router();

const { getProducts, createProduct, removeProduct, getProduct } = require('../controllers/product.controllers');
const Product = require('../models/product.models');

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.delete('/:id', removeProduct)

module.exports = router