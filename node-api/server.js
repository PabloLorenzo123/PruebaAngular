const app = require("./src/app");
const { PORT } = require("./src/config/serverConfig");

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
