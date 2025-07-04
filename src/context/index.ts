import { DataSource } from "typeorm"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "odoo",
    password: "odoo",
    database: "odoo-test",
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    migrationsTableName: "migrations"

})

