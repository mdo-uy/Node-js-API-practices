const Joi = require('joi');
const mongoose = require('mongoose');

// Schema
const genreSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

// Model
const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

module.exports.Genre = Genre;
module.exports.validate = validateGenre;