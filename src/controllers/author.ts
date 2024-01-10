import { Request, Response } from "express";
import Author from "../model/author.js";
import { PasswordHash } from "../util/hashing.js";
import { VerifyJwt, verfiedOutput } from "../util/jwtToken.js";
import Books from "../model/books.js";
import { Sequelize } from "sequelize";

export async function GetallAuthors(req: Request, res: Response) {
  try {
    const getCount = async (id: number) => {
      const booksCounter = await Books.findAndCountAll({
        where: {
          authorId: id,
        },
      });
      return booksCounter.count;
    };
    const allAuthors = await Author.findAll();
    let AllAuthorsData: {
      name?: string;
      email?: string;
      phone_no?: string;
      id?: number;
      booksPublished?: any;
    }[] = [];

    for (let index = 1; index < allAuthors.length; index++) {
      const count = await getCount(index);
      const authorData = allAuthors[index].dataValues;
      console.log(authorData);

      AllAuthorsData.push({ ...authorData, booksPublished: count });
    }

    res.status(200).send({ ...AllAuthorsData });
  } catch (error) {

    res.status(500).send("server error");
  }
}

export async function GetYourInfo(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const { email } = (await VerifyJwt(token.split(" ")[1])) as verfiedOutput;
    const authorInfo = await Author.findOne({
      where: {
        email: email,
      },
    });
    res.status(200).send(authorInfo);
  } catch (error) {
    res.status(500).send("internal error");
  }
}
export async function CreateAuthor(req: Request, res: Response) {
  try {
    const z = await PasswordHash(req.body.password);
    req.body.password = z;
    const insertNewAuthor = await Author.create({
      ...req.body,
    });
    res.status(200).send("author created");
  } catch (error) {
    // console.log(error)
    res.status(200).send("Internal Error");
  }
}
export async function EditAuthor(req: Request, res: Response) {
  const { id } = req.params;
  console.log({ ...req.body });
  try {
    const insertNewAuthor = await Author.update(req.body, {
      where: {
        id: id,
      },
    });
    console.log(insertNewAuthor);

    res.status(200).send("updated author");
  } catch (error) {
    res.status(500).send("Internal Error");
  }
}

export async function GetAuthor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const AuthorFinder = await Author.findByPk(id);
    if (AuthorFinder === null) {
      res.status(404).send("author not found");
    } else {
      const writtenBooks = await Books.findAll({
        where: {
          authorId: AuthorFinder.getDataValue("id"),
        },
      });
      res
        .status(200)
        .send({ ...AuthorFinder.toJSON(), books: writtenBooks[0] });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Error");
  }
}

export async function DeleteAuthor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Books.destroy({
      where: {
        authorId: id,
      },
    });
    const AuthorFinder = await Author.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("author Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Error");
  }
}

export async function BulkCReator(data: {
  name: string;
  email: string;
  phone_no: string;
  password: string;
}) {
  try {
    const z = await PasswordHash(data.password);
    data.password = z;
    const insertNewAuthor = await Author.create({
      ...data,
    });
  } catch (error) {
    // console.log(error)
  }
}
