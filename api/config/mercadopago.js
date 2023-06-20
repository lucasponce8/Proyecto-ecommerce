require("dotenv").config();
const mercadopago = require("mercadopago");

const {MERCADOPAGO_KEY} = process.env

mercadopago.configure({access_token: MERCADOPAGO_KEY});

module.exports = mercadopago; 