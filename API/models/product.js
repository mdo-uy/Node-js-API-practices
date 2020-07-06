const Joi = require('@hapi/joi');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Product = mongoose.model('Product', productSchema);

function validateProduct(product) {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required()
    });

    return schema.validate(product);
}

module.exports.Product = Product;
module.exports.validate = validateProduct;