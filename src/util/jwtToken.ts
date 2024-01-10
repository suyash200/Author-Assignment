import jwt, { JwtPayload } from "jsonwebtoken";

export interface verfiedOutput extends JwtPayload {
  email: string;
}
export function SignJwt(payload: object | string) {
  return jwt.sign(payload, "root", { expiresIn: "24h" });
}

export async function VerifyJwt(payload: string) {
  return jwt.verify(payload, "root");
}
