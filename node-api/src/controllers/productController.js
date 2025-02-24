/**
 * @module ProductController
 * @description Maneja la lógica de productos
 */
const Product = require("../models/Product");
const User = require("../models/User");

const createProduct = async (req, res) => {
  try {
    const { productName, developerName } = req.body;

    if (!productName || !developerName) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    // Create product
    const product = await Product.create({
      name: productName,
      userId: req.user?.userId,
    });

    res.status(201).json({
      message: "Producto recibido correctamente",
      data: product,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error has ocurred.");
  }
};

const getProducts = async (req, res) => {
  try {
    // User's products
    const products = await Product.findAll({
      where: {
        userId: req.user.userId,
      },
    });

    return res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error has ocurred.");
  }
};

module.exports = {
  createProduct,
  getProducts,
};