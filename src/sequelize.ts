import { Op } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    database: "books",
    dialect: "postgres",
    models: [__dirname + "/models"],
    operatorsAliases: Op,
    storage: ":memory:",
  }
);
