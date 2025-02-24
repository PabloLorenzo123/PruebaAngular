const app = require("./src/app");
const sequelize = require("./src/config/db");
const { PORT } = require("./src/config/serverConfig");

sequelize
  .sync({ alter: true, logging: false }) // Update database
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(`Error syncing database: ${err}`));

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});