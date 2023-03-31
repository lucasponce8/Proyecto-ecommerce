const { Router } = require("express");
const express = require ("express");
const server = require("../../app");
const { Product } = require("../models/Products");


const router = Router();


router.get('/products', async (req, res) => {
    const products = await Product.find();
    // aquí se va a escribir el código para obtener los productos de la base de datos
    res.status(200).json(products) 
    
});




module.exports = router;
