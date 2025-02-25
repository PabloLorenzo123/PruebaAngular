const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const path = require("path");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());

// Rutas
app.use("/api", router);

module.exports = app;