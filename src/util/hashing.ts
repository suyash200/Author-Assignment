import bcrypt from "bcrypt";

export async function PasswordHash(text: string) {
  return bcrypt.hashSync(text, 10);
}

export async function PassowrdCompare(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
