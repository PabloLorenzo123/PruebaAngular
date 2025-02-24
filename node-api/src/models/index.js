const Product = require("./Product");
const User = require("./User");
const Complaint = require("./Complaint");

User.hasMany(Product, { foreignKey: "userId" });
Product.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Product,
};