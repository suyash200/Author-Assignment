import { Router } from "express";
import AuthorRoute from "./authors.routes.js";
import BooksRoute from "./books.routes.js";
import { Login } from "../controllers/auth.js";

const router = Router();

router.post("/auth/login", Login);
router.use("/author",AuthorRoute);

router.use("/logged-in/books", BooksRoute);

export default router;
