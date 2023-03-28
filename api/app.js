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

server.use(bodyParser.json({ limit: '50mb' }))
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(cors());
server.use(express.json());
// server.use("/", routes);
server.use(cookieParser())
server.use(morgan('dev'))
server.use(cookieParser())
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

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});

Product.createCollection();
dbConnect();