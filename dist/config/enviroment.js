"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const env_var_1 = __importDefault(require("env-var"));
// Inicializar dotenv
(0, dotenv_1.config)();
// Cargar las variables de entorno y validarlas
const envs = {
    PORT: env_var_1.default.get("PORT").required().asPortNumber(),
    DATABASE_URL: env_var_1.default.get("DATABASE_URL").required().asString(),
    DATABASE: env_var_1.default.get("DATABASE").required().asString(),
    USERNAME: env_var_1.default.get("USERNAME").required().asString(),
    PASSWORD: env_var_1.default.get("PASSWORD").required().asString(),
    HOST: env_var_1.default.get("HOST").required().asString(),
    DIALECT: env_var_1.default.get("DIALECT").required().asString(),
};
// Retornar las variables de entorno
exports.default = envs;
