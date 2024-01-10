import { NextFunction, Request, Response } from "express";
import { VerifyJwt } from "../util/jwtToken.js";

export default async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const fullToken = req.headers.authorization as string;

    const JwtVerify = await VerifyJwt(fullToken.split(" ")[1]);

    JwtVerify !== null ? next() : res.status(500).send("unauthorized access");
  } catch (error) {
    res.status(500).send("unauthorized access");
  }
}
