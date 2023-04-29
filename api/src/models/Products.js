const { Schema, model } = require("mongoose");


const productSchema = new Schema(
    {
        name: String,
        description: String,
        price: Number,
        image: String,
        category: String,
        subcategory: String,
        stock: Number,
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Product = model("Product", productSchema);

module.exports = { Product };
