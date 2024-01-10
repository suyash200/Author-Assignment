import { Router } from "express";
import CreateBooks, {
  Addlike,
  DeleteBook,
  DisLike,
  EditBooks,
  GetBook,
  GetallBooks,
} from "../controllers/books.js";
import AuthMiddleware from "../middleware/authmiddleware.js";

const router = Router();
router.use(AuthMiddleware);
router.post("/createBooks", CreateBooks);
router.get("/:id", GetBook);
router.get("/", GetallBooks);
router.patch("/edit/:id", EditBooks);
router.delete("/delete/:id", DeleteBook);
router.patch("/like/:id", Addlike);
router.patch("/unlike/:id", DisLike);

export default router;
