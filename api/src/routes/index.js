const { Router } = require("express");
const { Product } = require("../models/Products"); // Importa el modelo de Producto desde su archivo
const { getCategories } = require("../controllers");
const { Order } = require("../models/Orders");
const router = Router(); // Crea un nuevo enrutador de Express

// ruta para postear productos
router.post("/product", async (req, res) => {
  const { name, description, price, image, category, subcategory, stock } = req.body;

  if (!name || !description || !price || !category || !stock) {
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
      stock,
    });

    await product.save();

    res.status(200).send("Producto creado exitosamente");
  } catch (error) {
    res.status(500).send("Hubo un problema con el post");
  }
});

// ruta para traer todos los productos
router.get("/products", async (req, res) => {
    
    try {
        const products = await Product.find();
        
        if(products) {
            // aquí se va a escribir el código para obtener los productos de la base de datos
            res.status(200).json(products);
        } else {
            // si no hay productos en la base de datos
            res.status(404).send({message: "No hay productos en la base de datos"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Hubo un problema al traer todos los productos"});        
    }

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
    console.log(error); // Muestra el error en la consola del servidor
    res.status(500).json({ message: "Error al actualizar el producto" }); // Envía una respuesta de error con un mensaje
  }
});

// Ruta DELETE que sirve para borrar un producto de la base de datos

router.delete("/product/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({ message: "No se encontró el producto" });
    }

    res.status(200).send({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    res.status(500).send({ message: "Error al eliminar el producto" });
  }
});

// Ruta que trae los productos por nombre
router.get("/product", async (req, res) => {
  const { name } = req.query; //el query lo saco por url
  const filter = { name: { $regex: new RegExp(name), $options: "i" } }; // Si hay un valor de consulta "nombre", crear un objeto de filtro
  try {
    const productFilter = await Product.find(filter);
    if (productFilter.length > 0) {
      return res.status(200).json(productFilter);
    } else {
      return res
        .status(404)
        .send({ message: "No se encontraron productos con ese nombre" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Hubo un problema para buscar por nombre" });
  }
});

// Ruta que trae los productos por id
router.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // si existe el id que le estoy pasando
    if (id) {
      const productFilter = await Product.findById(id);
      return res.status(200).json(productFilter);
    } else {
      // si no hay id
      return res
        .status(404)
        .send({ message: "No se encontraron productos con ese id" });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: "Hubo un problema para buscar por id" });
  }
});

// Ruta que trae las categorias
router.get("/categories", async (req, res) => {
  try {
    const categoryDB = await getCategories();
    res.status(200).json(categoryDB);
  } catch (error) {
    console.log(error)
    res.status(404).send({ message: "No hay categorias"})
  }
})


// RUTAS PARA LAS ORDENES

// ruta para postear las ordenes
router.post("/order", async (req, res) => {
  const { products, total } = req.body;

  // if(!products && !total) {
  //     res.status(404).send({
  //         message: 'Error, no se puede crear la orden porque faltan datos.',
  //     });
  // }

  try {
      let order = new Order({
          products,
          total,
      });

      await order.save();

      res.status(200).send('Orden creada exitosamente');
  } catch (error) {
      res.status(500).send('Hubo un problema con el post de la orden');
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    
    if(orders) {
        // aquí se va a escribir el código para obtener las ordenes de la base de datos
        res.status(200).json(orders);
    } else {
        // si no hay ordenes en la base de datos
        res.status(404).send({message: "No hay ordenes en la base de datos"});
    }
} catch (error) {
    console.log(error);
    res.status(500).send({message: "Hubo un problema al traer todas las ordenes"});        
}
})

module.exports = router;
