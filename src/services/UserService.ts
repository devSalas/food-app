import { Prisma, PrismaClient } from "@prisma/client";
import { EncryptPassword } from "../utils/bcrypt/EncryptPassword";
import { CustomError } from "../utils/errors";
import { getRolbyName } from "./RolService";

const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      address: true,
      email: true,
      id: true,
      image: true,
      name: true,
      password: true,
      rol_id: true,
    },
  });

  return users;
}
export async function createUser({
  email,
  password,
  name,
  address,
}: {
  email: string;
  password: string;
  name: string;
  image: string;
  address: string;
}) {
  const isexist = await prisma.user.findFirst({ where: { email } });

  if (isexist?.id) throw new CustomError("Email is already registered", 400);

  const passwordEncrypt = await EncryptPassword({ password });

  const rol = await getRolbyName({ name: "client" });

  if (!rol.id) throw new CustomError("Server Error", 500);

  const user = await prisma.user.create({
    data: {
      address,
      email,
      password: passwordEncrypt,
      name,
      image: "",
      rol_id: rol.id,
    },
  });

  return user;
}
export async function getUserbyName({ name }: { name: string }) {
  const user = await prisma.user.findFirst({
    where: { name },
    select: {
      address: true,
      email: true,
      id: true,
      image: true,
      name: true,
      password: true,
      rol_id: true,
    },
  });

  if (!user?.id) throw new CustomError("not found", 404);

  return user;
}

export async function getUserbyId({ id }: { id: number }) {
  const user = await prisma.user.findFirst({
    where: { id },
    select: {
      address: true,
      email: true,
      id: true,
      image: true,
      name: true,
      password: true,
      rol_id: true,
    },
  });

  if (!user?.id) throw new CustomError("not found", 404);

  return user;
}

export async function deleteUser({ id }: { id: number }) {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user?.id) throw new CustomError("not found", 404);

  return await prisma.user.delete({ where: { id } });
}
export async function updateUser({
  id,
  email,
  password,
  name,
  address,
}: {
  id: number;
  email: string;
  password: string;
  name: string;
  image: string;
  address: string;
}) {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user?.id) throw new CustomError("not found", 404);

  return await prisma.user.update({
    where: { id },
    data: { name, email, password, address },
  });
}
