const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite", // Path to sqlite database
});

module.exports = sequelize;
