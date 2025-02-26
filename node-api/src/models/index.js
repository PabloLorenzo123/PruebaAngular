const Product = require("./Product");
const User = require("./User");

User.hasMany(Product, { foreignKey: "userId" });

module.exports = {
  User,
};
