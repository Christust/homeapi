import { DataSource } from "typeorm"
import enviroment from "../config/enviroment"

export default new DataSource({
    type: "postgres",
    host: enviroment.HOST,
    port: enviroment.DATABASE_PORT,
    username: enviroment.USERNAME,
    password: enviroment.PASSWORD,
    database: enviroment.DATABASE,
    entities: [enviroment.NODE_ENV === "development" ? "src/entities/*.ts" : "entities/*.js"],
    migrations: [enviroment.NODE_ENV === "development" ? "src/migrations/*.ts" : "migrations/*.js"],
    migrationsTableName: "migrations"

})

