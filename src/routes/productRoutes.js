const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @route POST /product
 * @description Recibe un producto con su desarrollador
 * @access Público
 */
router.post("/product", productController.createProduct);

module.exports = router;
