/**
 * @module ProductController
 * @description Maneja la lógica de productos
 */

exports.createProduct = (req, res) => {
    const { productName, developerName } = req.body;

    if (!productName || !developerName) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    res.status(201).json({
        message: "Producto recibido correctamente",
        data: { productName, developerName },
    });
};
