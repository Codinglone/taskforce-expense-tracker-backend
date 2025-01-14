require("dotenv").config();
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

const dbURL = ""
export const AppDataSource = new DataSource(process.env.NODE_ENV === "production"
    ? {
      type: "postgres",
      url: dbURL,
      synchronize: true,
      logging: false,
      entities: [User],
      migrations: [],
      subscribers: [],
    }
    : {
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT),
      username: "postgres",
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || "freelancedb",
      synchronize: true,
      logging: false,
      entities: [User],
      migrations: [],
      subscribers: [],
    })
