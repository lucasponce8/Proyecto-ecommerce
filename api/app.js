require("dotenv").config();
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const dbConnect = require("./config/mongo");
const routes = require("./src/routes/index");

const { Product } = require("./src/models/Products");

const server = express();

// Analiza el cuerpo de la solicitud en formato JSON con un límite de tamaño máximo de 50MB.
server.use(bodyParser.json({ limit: '50mb' }))
// Analiza el cuerpo de la solicitud en formato URL codificado con un límite de tamaño máximo de 50MB.
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
// Configura el middleware CORS para permitir que la aplicación se ejecute en diferentes orígenes de dominio.
server.use(cors());
// Analiza el cuerpo de la solicitud en formato JSON utilizando la biblioteca integrada de Express.js.
server.use(express.json());

// Esta linea se usa para definir las rutas de la aplicación. En este caso, se comenta, lo que significa que las rutas de la aplicación no están definidas
// server.use("/", routes);


//  Analiza las cookies enviadas con las solicitudes entrantes del cliente.
server.use(cookieParser())
// Registra las solicitudes entrantes del cliente y las respuestas del servidor en la consola en modo de desarrollo.
server.use(morgan('dev'))

// Configura las cabeceras de respuesta para permitir el acceso a recursos de origen cruzado (CORS).
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, Accept-Encoding, redirect'
  )
  next()
})

// Declaro el puerto y llamo al puerto que configure en mi archivo .env si no esta disponible llamo al 3001
const port = process.env.PORT || 3001;

//  se utiliza para iniciar un servidor web de Node.js y hacer que escuche en un puerto específico. El parámetro port es el número del puerto en el que se escucharán las solicitudes entrantes del cliente.
server.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});


//Conexion base de datos
Product.createCollection();
dbConnect();