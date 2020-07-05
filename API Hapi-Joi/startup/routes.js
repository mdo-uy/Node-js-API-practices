const express = require('express');
const users = require('../routes/users');
const products = require('../routes/products');
const auth = require('../routes/auth'); 

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/products', products);
    app.use('/api/auth', auth); 
}