const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../lib/constants");

const signup = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Validate data
    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).send("Por favor llenar todos los campos.");
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      email,
      firstName,
      lastName,
      password: encryptedPassword,
      profilePic: req.file?.filename || null,
    });

    // Create access token and refresh token
    const payload = { userId: user.id };
    const accessToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
    const refreshToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "3d" });

    return res.status(201).json({
      user,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Ha ocurrido un error.");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Look for user
    const user = await User.findOne({
      where: {
        username,
      },
    });

    // Validate credentials
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Credenciales invalidas.");
    }

    // Create access token and refresh token
    const payload = { userId: user.id };
    const accessToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
    const refreshToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "3d" });

    return res.json({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Ha ocurrido un error.");
  }
};

const userInfo = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Ha ocurrido un error.");
  }
};

module.exports = {
  signup,
  login,
  userInfo,
};