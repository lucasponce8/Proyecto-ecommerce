"use strict";

const { Router } = require("express");
const express = require("express");
const { Product } = require("../models/Products");
const router = Router();

router.post('/productos', async (req, res) => {
    const { 
        name ,
        description,
        price,
        image,
        category,
        subcategory,
    } = req.body;

    if(!name || !description || !price || !category) {
        res.status(404).send({message: "Error, no se puede crear el producto porque faltan datos"});
    }

    try {
        let product = new Product({
        name ,
        description,
        price,
        image,
        category,
        subcategory,
        });

        await product.save();

        res.status(200).send('Producto creado exitosamente');

    } catch (error) {
        res.status(500).send('Hubo un problema con el post');
    }

});



module.exports = router;