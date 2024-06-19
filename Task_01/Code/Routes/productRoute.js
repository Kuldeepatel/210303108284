const express = require('express');
const router = express.Router();
const productController = require('../Controllers/getProducts');

// Route to getProduct products
router.get('/getproduct', productController.getProduct);

module.exports = router;
