require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "MY_SUPER_SECRET_KEY";

module.exports = SECRET_KEY;
