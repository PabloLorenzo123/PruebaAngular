/**
 * @module ProductController
 * @description Maneja la lógica de productos
 */

const User = require("../models/User");


/**
 * @route POST /product
 * @description Recibe un producto con su desarrollador
 * @access Público
 */

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

const createProduct = async (req, res) => {
  try {
    const { productName, developerName } = req.body;

    if (!productName || !developerName) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const productExists = products.find(p => p.name.toLowerCase() == productName.toLowerCase()) ? true: false;
    if (productExists){
      res.status(201).json({
        message: "Producto recibido correctamente",
        data: {productName, developerName},
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error has ocurred.");
  }
};

const getAllProducts = async (req, res) => {
  
  return res.status(200).json(products);
}


module.exports = {
  createProduct,
  getAllProducts,
};
