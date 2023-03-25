const server = require("./app");
const { Product } = require("./db");


Product.createCollection();
const port = 3001;
server.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`)
})

