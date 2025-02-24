/**
 * @module ProductController
 * @description Maneja la lógica de productos
 */
const Product = require("../models/Product");
const User = require("../models/User");


/**
 * @route POST /product
 * @description Recibe un producto con su desarrollador
 * @access Público
 */
const createProduct = async (req, res) => {
  try {
    const { productName, developerName } = req.body;

    if (!productName || !developerName) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    // Create product
    // const product = await Product.create({
    //   name: productName,
    //   userId: req.user?.userId,
    // });

    res.status(201).json({
      message: "Producto recibido correctamente",
      data: {productName, developerName},
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error has ocurred.");
  }
};

const getAllProducts = async (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Para tu mejor amigo'
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
  getAllProducts,
};