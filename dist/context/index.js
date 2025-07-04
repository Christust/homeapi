"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "odoo",
    password: "odoo",
    database: "odoo-test",
    entities: ["entities/*.js"],
    migrations: ["migrations/*.js"],
    migrationsTableName: "migrations"
});
