import express from "express";
import DbConnection from "./util/dbConfig.js";
import { json, urlencoded } from "express";
import router from "./routes/index.js";
import { seederData } from "./seeders/seeder.js";

const app = express();

app.use(json());
app.use(urlencoded());


app.use(router);
app.listen(4000, () => {
  DbConnection().then(() => {
    seederData();
  });
});
