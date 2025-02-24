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

productsRouter.post("/", createProduct);

const getAllProducts = async (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Para tu amigo'
    },
    {
      id: 2,
      name: 'Por si te enfermas',
    },
    {
      id: 3,
      name: 'Para tu bici'
    }
  ]
  return res.status(200).json(products);
}


productsRouter.get("/", getAllProducts);

module.exports = productsRouter;