const { Router } = require("express");
const { Product } = require("../models/Products"); // Importa el modelo de Producto desde su archivo
const router = Router(); // Crea un nuevo enrutador de Express

// ruta para postear productos
router.post("/product", async (req, res) => {
    const { name, description, price, image, category, subcategory } = req.body;

    if (!name || !description || !price || !category) {
        res.status(404).send({
            message: "Error, no se puede crear el producto porque faltan datos",
        });
    }

    try {
        let product = new Product({
            name,
            description,
            price,
            image,
            category,
            subcategory,
        });

        await product.save();

        res.status(200).send("Producto creado exitosamente");
    } catch (error) {
        res.status(500).send("Hubo un problema con el post");
    }
});

// ruta para traer todos los productos
router.get("/products", async (req, res) => {
    const products = await Product.find();
    // aquí se va a escribir el código para obtener los productos de la base de datos
    res.status(200).json(products);
});

// Define la ruta PUT /productos/:id para actualizar un producto por su ID
router.put("/product/:id", async (req, res) => {
    const { id } = req.params; // Obtiene el ID del producto a actualizar desde la URL
    const { name, price } = req.body; // Obtiene los nuevos valores para nombre y precio del cuerpo de la solicitud

    try {

        // Intenta actualizar el producto en la base de datos utilizando el método findByIdAndUpdate de Mongoose. 
        // Este método busca un documento en la colección de productos con el _id correspondiente al valor de id, y actualiza los campos nombre y precio con los valores correspondientes. 
        // El tercer parámetro { new: true } indica que se debe devolver el documento actualizado en la respuesta.
        const updateProduct = await Product.findByIdAndUpdate(
            id, // El ID del producto a actualizar
            { name, price }, // El nuevo nombre y precio del producto
            { new: true } // Devuelve el producto actualizado en la respuesta
        );

        res.status(200).json(updateProduct); // Envía la respuesta con el producto actualizado en formato JSON con un status 200
    } catch (error) {
        console.log(error);  // Muestra el error en la consola del servidor
        res.status(500).json({ message: "Error al actualizar el producto" }); // Envía una respuesta de error con un mensaje
    }
});

module.exports = router;
