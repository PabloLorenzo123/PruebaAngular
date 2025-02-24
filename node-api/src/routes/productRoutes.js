const express = require("express");
const productsRouter = express.Router();
const authenticate = require("../middlewares/authenticate");

const {
  createProduct,
  getProducts,
  getAllProducts,
} = require("../controllers/productController");

productsRouter.post("/", createProduct);

productsRouter.get("/", getAllProducts);

module.exports = productsRouter;