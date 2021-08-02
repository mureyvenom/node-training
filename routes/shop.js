const express = require('express');
const path = require('path');
const rootPath = require('../utils/path');
const admindata = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const { products } = admindata;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;