const express = require("express");
const productsRouter = require("./productRoutes");
const userRouter = require("./userRoutes");
const complaintsRoutes = require("./complaintsRoutes");
const discoverSectionRoutes = require("./DiscoverRoutes");
const router = express.Router();

// Routes
router.use("/complaints", complaintsRoutes);
router.use("/product", productsRouter);
router.use("/discover", discoverSectionRoutes);
router.use("/auth", userRouter);

module.exports = router;
