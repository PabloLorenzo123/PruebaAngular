const express = require("express");
const productsRouter = require("./productRoutes");
const userRouter = require("./userRoutes");
const discoverSectionRoutes = require("./DiscoverRoutes");
const router = express.Router();

// Routes
router.use("/product", productsRouter);
router.use("/discover", discoverSectionRoutes);
router.use("/auth", userRouter);

module.exports = router;
