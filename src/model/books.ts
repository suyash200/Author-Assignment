import { DataTypes } from "sequelize";
import { sequelize } from "../util/dbConfig.js";
import Author from "./author.js";

const Books = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.INTEGER,
  },
  authorId: {
    type:DataTypes.INTEGER,
    allowNull:false,
    references: {
      model: Author,
      key: "id",
      
    },
  },
});
Books.hasOne(Author)
export default Books;
