import { Router } from "express";
import {
  CreateAuthor,
  DeleteAuthor,
  EditAuthor,
  GetAuthor,
  GetYourInfo,
  GetallAuthors,
} from "../controllers/author.js";

const router = Router();

router.get("/", GetallAuthors);
router.get("/me", GetYourInfo);
router.post("/add", CreateAuthor);
router.patch("/edit/:id", EditAuthor);
router.get("/:id", GetAuthor);
router.delete("/delete/:id", DeleteAuthor);
export default router;
