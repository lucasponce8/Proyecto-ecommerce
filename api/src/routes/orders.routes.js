const { Router } = require("express");
const { Order } = require("../models/Orders");

const router = Router(); //nuevo enrutador de Express

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


module.exports = router;