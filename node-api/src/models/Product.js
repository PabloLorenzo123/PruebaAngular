const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  { timestamps: true }
);

module.exports = Product;