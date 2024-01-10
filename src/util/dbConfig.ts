import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv();

export const sequelize = new Sequelize(
  process.env.database!,
  process.env.Db_Name!,
  process.env.Db_Password,
  {
    host: process.env.Db_Host,
    dialect: "postgres",
  }
);

export default async function DbConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    // console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
