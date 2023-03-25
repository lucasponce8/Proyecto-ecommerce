//aqui se define la base de datos
//require llama dependecias o archivos locales en el back
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tomigarcia89:iR5mYwbeq2W3MXMO@cluster0.9e5sypu.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    subcategory: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = {Product};