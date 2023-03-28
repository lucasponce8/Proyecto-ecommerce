// base de datos
const mongoose = require("mongoose");

const dbConnect = () => {
  const MONGO_USER = process.env.MONGO_USER;
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

  mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.9e5sypu.mongodb.net/test`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    
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