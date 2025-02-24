const express = require("express");
const productsRouter = express.Router();
const authenticate = require("../middlewares/authenticate");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

/**
 * @route POST /product
 * @description Recibe un producto con su desarrollador
 * @access Público
 */

productsRouter.post("/", authenticate, createProduct);
productsRouter.get("/", authenticate, getProducts);

module.exports = productsRouter;