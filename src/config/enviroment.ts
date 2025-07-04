import { config } from "dotenv";
import envvar from "env-var";

// Inicializar dotenv
config();

// Cargar las variables de entorno y validarlas
const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  DATABASE_URL: envvar.get("DATABASE_URL").required().asString(),
  DATABASE: envvar.get("DATABASE").required().asString(),
  USERNAME: envvar.get("USERNAME").required().asString(),
  PASSWORD: envvar.get("PASSWORD").required().asString(),
  HOST: envvar.get("HOST").required().asString(),
  DIALECT: envvar.get("DIALECT").required().asString(),
};

// Retornar las variables de entorno
export default envs;
