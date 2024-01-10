import { BulkCReator, CreateAuthor } from "../controllers/author.js";
import Author from "../model/author.js";
import Books from "../model/books.js";
import { sequelize } from "../util/dbConfig.js";

const authorsData = [
  {
    name: "Gra",
    email: "Diana7@outlook.com",
    phone_no: "+1-924-1829",
    password: "root",
  },
  {
    name: "ive",
    email: "Frank1@icloud.com",
    phone_no: "+33-267-4817",
    password: "root",
  },
  {
    name: "snageeta",
    email: "Harry2@outlook.com",
    phone_no: "+44-823-2196",
    password: "root",
  },
  {
    name: "zve",
    email: "eve1@gmail.com",
    phone_no: "+1-973-4815",
    password: "root",
  },
  {
    name: "sageeta",
    email: "sageeta@gmail.com",
    phone_no: "+33-939-1210",
    password: "root",
  },
  {
    name: "Charlie",
    email: "Grace9@outlook.com",
    phone_no: "+33-116-8154",
    password: "root",
  },
  {
    name: "Chars",
    email: "Harry34@yahoo.com",
    phone_no: "+49-184-2563",
    password: "root",
  },
  {
    name: "wonder",
    email: "wonder@icloud.com",
    phone_no: "+49-344-5913",
    password: "root",
  },
  {
    name: "Harry",
    email: "Charlie65@gmail.com",
    phone_no: "+33-141-7451",
    password: "root",
  },
  {
    name: "Frank",
    email: "Alice74@yahoo.com",
    phone_no: "+49-848-6148",
    password: "root",
  },
];

const bookSeed = [
  {
    title: "Post 994: Exploring the world of...",
    likes: 14,
    authorId: 1,
  },
  {
    title: "Post 256: The importance of...",
    likes: 861,
    authorId: 3,
  },
  {
    title: "Post 988: Exploring the world of...",
    likes: 562,
    authorId: 5,
  },
  {
    title: "Post 998: Why you should...",
    likes: 403,
    authorId: 2,
  },
  {
    title: "Post 539: A thought on...",
    likes: 345,
    authorId: 7,
  },
];

export const seederData = async () => {
  try {
    for (let index = 0; index < authorsData.length; index++) {
      await BulkCReator(authorsData[index]);
    }
    await Books.bulkCreate(bookSeed);
  } catch (error) {
    console.log(error);
  }
};
