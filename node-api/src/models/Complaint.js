const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Complaint = sequelize.define(
  "Complaint",
  {
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    description: {
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
      },
      onDelete: "CASCADE",
    },
  },
  { timestamps: true }
);

module.exports = Complaint;