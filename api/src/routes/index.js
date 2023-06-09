
const { Router } = require("express");
const express = require("express");
const { Product } = require("../models/Products");
const router = Router();

router.post('/product', async (req, res) => {
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


router.get('/products', async (req, res) => {
    const products = await Product.find();
    // aquí se va a escribir el código para obtener los productos de la base de datos
    res.status(200).json(products) 
    
});



module.exports = router;
