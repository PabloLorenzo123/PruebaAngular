const express = require("express");
const { signup, login, userInfo } = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/uploads");
const userRouter = express.Router();

// Routes
userRouter.get("/", authenticate, userInfo);
userRouter.post("/signup", upload.single("profilePic"), signup);
userRouter.post("/login", login);

module.exports = userRouter;