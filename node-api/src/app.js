const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", router);

module.exports = app;