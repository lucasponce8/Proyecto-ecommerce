const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        products: Array,
        total: Number
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Order = model("Order", orderSchema);

module.exports = { Order };