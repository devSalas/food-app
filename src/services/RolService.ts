import { PrismaClient } from "@prisma/client";
import { CustomError } from "../utils/errors";

const prisma = new PrismaClient();

export async function getRoles() {
	const users = await prisma.rol.findMany();

	return users;
}

export async function createRol({ name }: { name: string }) {
	const isexist = await prisma.rol.findFirst({ where: { name } });

	if (isexist !== null)
		throw new CustomError("name is already registered", 400);

	const user = await prisma.rol.create({ data: { name } });

	return user;
}

export async function getRolbyId({ id }: { id: number }) {
	const user = await prisma.rol.findFirst({ where: { id } });

	if (!user?.id) throw new CustomError("not found", 404);

	return user;
}
export async function getRolbyName({ name }: { name: string }) {
	const user = await prisma.rol.findFirst({ where: { name } });

	if (!user?.id) throw new CustomError("not found", 404);

	return user;
}

export async function deleteRol({ id }: { id: number }) {
	const user = await prisma.rol.findFirst({ where: { id } });

	if (!user?.id) throw new CustomError("not found", 404);

	return await prisma.rol.delete({ where: { id } });
}

export async function updateRol({ id, name }: { id: number; name: string }) {
	const user = await prisma.rol.findFirst({ where: { id } });

	if (!user?.id) throw new CustomError("not found", 404);

	return await prisma.rol.update({ where: { id }, data: { name } });
}
