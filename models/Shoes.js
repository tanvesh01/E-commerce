const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    name: String,
    imageLink: String,
    size: String,
    discription: String
});

module.exports = Shoe = mongoose.model('Shoe', ShoeSchema);