const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/ecommerce')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connected to MongoDB...'));
} 