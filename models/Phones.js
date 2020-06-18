const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhonesSchema = new Schema({
    name: String,
    brand: String,
    price: String,
    rating: Number,
    imageLink: String,
    discription: String,
    category: String
});

module.exports = Phones = mongoose.model('Phones', PhonesSchema);