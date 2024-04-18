import { PrismaClient } from "@prisma/client";
import { CustomError } from "../utils/errors";

const prisma = new PrismaClient();

export async function getRoles() {
  const users = await prisma.rol.findMany();

  return users;
}

export async function createRol({ name }: { name: string }) {
<<<<<<< HEAD
	const isexist = await prisma.rol.findFirst({ where: { name } });

	if (isexist !== null)
		throw new CustomError("name is already registered", 400);

	const user = await prisma.rol.create({ data: { name } });
=======
  const isexist = await prisma.rol.findFirst({ where: { name } });
>>>>>>> 4287029b7c636487dea716fd640b5240932dae4b

  if (isexist !== null)
    throw new CustomError("name is already registered", 400);

  const user = await prisma.rol.create({ data: { name } });

  return user;
}

export async function getRolbyId({ id }: { id: number }) {
  const user = await prisma.rol.findFirst({ where: { id } });

<<<<<<< HEAD
	if (!user?.id) throw new CustomError("not found", 404);

	return user;
}
export async function getRolbyName({ name }: { name: string }) {
	const user = await prisma.rol.findFirst({ where: { name } });

	if (!user?.id) throw new CustomError("not found", 404);

	return user;
=======
  if (!user?.id) throw new CustomError("not found", 404);

  return user;
>>>>>>> 4287029b7c636487dea716fd640b5240932dae4b
}

export async function deleteRol({ id }: { id: number }) {
  const user = await prisma.rol.findFirst({ where: { id } });

<<<<<<< HEAD
	if (!user?.id) throw new CustomError("not found", 404);

	return await prisma.rol.delete({ where: { id } });
=======
  if (!user?.id) throw new CustomError("not found", 404);

  return await prisma.rol.delete({ where: { id } });
>>>>>>> 4287029b7c636487dea716fd640b5240932dae4b
}

export async function updateRol({ id, name }: { id: number; name: string }) {
  const user = await prisma.rol.findFirst({ where: { id } });

<<<<<<< HEAD
	if (!user?.id) throw new CustomError("not found", 404);

	return await prisma.rol.update({ where: { id }, data: { name } });
=======
  if (!user?.id) throw new CustomError("not found", 404);

  return await prisma.rol.update({ where: { id }, data: { name } });
>>>>>>> 4287029b7c636487dea716fd640b5240932dae4b
}
