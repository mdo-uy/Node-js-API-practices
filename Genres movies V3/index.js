const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const app = express();

mongoose.connect('mongodb://localhost/moviesDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connected to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));