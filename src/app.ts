import "module-alias/register";
import "reflect-metadata"
import express from "express";
import envs from "./config/enviroment";
import router from "./routes";
import DataSource from "./context";


// Iniciamos la app
const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api", router);

// Manejo de errores

DataSource.initialize().then(() => {
  console.log("📦 DataSource initialized");

  app.listen(envs.PORT, () => {
    console.log("Server is running on port", envs.PORT);
  });
}).catch(err => {
  console.error("Error al iniciar la app:", err.message);
});
