// base de datos
const mongoose = require("mongoose");

const dbConnect = () => {
    // llamo a lo que esta definido en el archivo .env
    const MONGO_USER = process.env.MONGO_USER;
    const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

    //   realizo la conexion y reemplazo los datos sensibles por las variables que representan los datos sensibles
    mongoose.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.9e5sypu.mongodb.net/test`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        // (err, res) => {
        //   if (!err) {
        //     console.log("*******CONECCION EXITOSA***********");
        //   } else {
        //     console.error(err);
        //     console.log("********ERROR DE CONECCION*********");
        //   }
        // }
    );
};

module.exports = dbConnect;
