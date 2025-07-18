import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import enviroment from "./config/enviroment";
import router from "./routes";
import DataSource from "./context";
import { error, log, separator } from "./scripts/logs.scripts";
// Iniciamos la app
const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/", router);

// Manejo de errores
DataSource.initialize()
  .then(() => {
    log("📦 DataSource initialized");

    app.listen(enviroment.PORT, () => {
      log(`Server is running on port ${enviroment.PORT}`);
    });
  })
  .catch((err) => {
    error(`Error during DataSource initialization: ${err}`);
  });
