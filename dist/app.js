"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const enviroment_1 = __importDefault(require("./config/enviroment"));
const routes_1 = __importDefault(require("./routes"));
const context_1 = __importDefault(require("./context"));
// Iniciamos la app
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
// Rutas
app.use("/api", routes_1.default);
// Manejo de errores
context_1.default.initialize().then(() => {
    console.log("📦 DataSource initialized");
    app.listen(enviroment_1.default.PORT, () => {
        console.log("Server is running on port", enviroment_1.default.PORT);
    });
}).catch(err => {
    console.error("Error al iniciar la app:", err.message);
});
