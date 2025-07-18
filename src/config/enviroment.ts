import { config } from "dotenv";
import envvar from "env-var";

// Inicializar dotenv
config();

// Cargar las variables de entorno y validarlas
const enviroment = {
  NODE_ENV: envvar.get("NODE_ENV").default("development").asString(),
  PORT: envvar.get("PORT").required().asPortNumber(),
  DATABASE_URL: envvar.get("DATABASE_URL").required().asString(),
  DATABASE: envvar.get("DATABASE").required().asString(),
  USERNAME: envvar.get("USERNAME").required().asString(),
  PASSWORD: envvar.get("PASSWORD").required().asString(),
  DATABASE_PORT: envvar.get("DATABASE_PORT").required().asPortNumber(),
  HOST: envvar.get("HOST").required().asString(),
  DIALECT: envvar.get("DIALECT").required().asString(),
};

// Retornar las variables de entorno
export default enviroment;
