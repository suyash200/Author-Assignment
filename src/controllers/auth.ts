import { Request, Response } from "express";
import Author from "../model/author.js";
import { PassowrdCompare } from "../util/hashing.js";
import { SignJwt } from "../util/jwtToken.js";

export async function Login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const authorFinder = await Author.findOne({
      where: {
        email: email,
      },
    });

    const passwordCheck = await PassowrdCompare(
      password,
      authorFinder?.getDataValue("password")
    );
    passwordCheck
      ? res.status(200).send({
          message: "sucess",
          token: SignJwt({ email: authorFinder?.getDataValue("email") }),
        })
      : res.status(401).send("wrong password");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal error");
  }
}
