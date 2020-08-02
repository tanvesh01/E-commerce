const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    brand: String,
    price: String,
    rating: Number,
    imageLink: String,
    sizes: [String],
    discription: String,
    category: String,
});

module.exports = Product = mongoose.model("Product", ProductSchema);
