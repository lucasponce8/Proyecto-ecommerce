const { Order } = require("../models/Orders")

const createOrder =  async () => {
    try {
        const order = await Order.find();

        return order;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createOrder
}