import { PrismaClient } from "@prisma/client";
import { decodePassword } from "../utils/bcrypt/EncryptPassword";
import { CustomError } from "../utils/errors";
import { jwtSign } from "../utils/jwt/jwt";

const prisma = new PrismaClient();

export async function SignInService({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const userExist = await prisma.user.findFirst({ where: { email } });
  
  if (!userExist?.id)
    throw new CustomError("Email or password not exist", 401);
  
  const passwordVerify = await decodePassword({
    password,
    passwordEncripted: userExist.password,
  });
  
  if (!passwordVerify) throw new CustomError("Email or paswrod not exist", 401);

  const token = await jwtSign({ id: userExist.id });

  const user={
    name:userExist.name,
    email:userExist.email,
    rol_id:userExist.rol_id,
    image:userExist.image,
    id:userExist.id
  }

  return { token, user };
}

