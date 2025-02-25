const express = require("express");
const productsRouter = express.Router();
const authenticate = require("../middlewares/authenticate");

const {
  createProduct,
  getProducts,
  getAllProducts,
} = require("../controllers/productController");

productsRouter.post("/", authenticate, createProduct);

productsRouter.get("/", authenticate, getAllProducts);

module.exports = productsRouter;