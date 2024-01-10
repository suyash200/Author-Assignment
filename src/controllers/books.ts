import { Request, Response } from "express";
import Books from "../model/books.js";

export default async function CreateBooks(req: Request, res: Response) {
  try {
    const createBooks = await Books.create({
      ...req.body,
    });
    res.status(200).send("book Created");
  } catch (error) {
    res.status(500).send("book not registered");
  }
}

export async function GetallBooks(req: Request, res: Response) {
  try {
    const allBooks = Books.findAll({
      order: [["likes", "DESc"]],
    });
    res.status(200).send(allBooks);
  } catch (error) {
    res.status(500).send("internal server error");
  }
}
export async function EditBooks(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const editBooks = await Books.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(204);
  } catch (error) {
    res.send(500).send("book not updated");
  }
}
export async function GetBook(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const bookfinder = await Books.findByPk(id);
    if (bookfinder === null) {
      res.status(404).send("no books found");
    }
    res.status(200).send(bookfinder?.toJSON());
  } catch (error) {
    res.status(500).send("internal server error");
  }
}
export async function DeleteBook(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const bookfinder = await Books.findByPk(id);
    if (bookfinder === null) {
      res.status(404).send("no books found");
    }
    await bookfinder?.destroy();
    res.status(200).send("book Deleted");
  } catch (error) {
    res.status(500).send("internal server error");
  }
}
export async function Addlike(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const bookfinder = await Books.findByPk(id);
    if (bookfinder === null) {
      res.status(404).send("no books found");
    }
    bookfinder?.increment("likes");
    res.status(200).send("likes updated");
  } catch (error) {
    res.status(500).send("internal server error");
  }
}

export async function DisLike(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const bookfinder = await Books.findByPk(id);
    if (bookfinder === null) {
      res.status(404).send("no books found");
    }
    bookfinder?.decrement("likes");
    res.status(200).send("likes updated");
  } catch (error) {
    res.status(500).send("internal server error");
  }
}
