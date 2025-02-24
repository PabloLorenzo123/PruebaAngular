const SECRET_KEY = require("../lib/constants");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  console.log(req.headers.authorization);

  if (!token) {
    return res.status(401).send("Access denied");
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    console.error(err);
    return res.status(401).send("Access denied");
  }

  next();
};

module.exports = authenticate;
