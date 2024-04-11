<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";
=======
import {  PrismaClient } from "@prisma/client";
import { CustomError } from "../utils/errors";
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

const prisma = new PrismaClient();

export async function getRoles() {
	const users = await prisma.rol.findMany();

	return users;
}
export async function createRol({ name }: { name: string }) {
	const isexist = await prisma.rol.findFirst({ where: { name } });

<<<<<<< HEAD
	if (isexist?.id) throw new Error("email is already registered");

	const user = await prisma.rol.create({ data: { name } });
=======
    const isexist=await prisma.rol.findFirst({where:{name}})
    
    if (isexist !== null) throw new CustomError("name is already registered",400)
        
    const user=await prisma.rol.create({data:{name}})
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

	return user;
}

export async function getRolbyName({ name }: { name: string }) {
	const user = await prisma.rol.findFirst({ where: { name } });

	if (!user?.id) throw new Error("not found");

<<<<<<< HEAD
	return user;
=======
    if (!user?.id) throw new CustomError("not found",404)

    return user 
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}

export async function deleteRol({ id }: { id: number }) {
	const user = await prisma.rol.findFirst({ where: { id } });

	if (!user?.id) throw new Error("not found");

<<<<<<< HEAD
	return await prisma.rol.delete({ where: { id } });
=======
    if (!user?.id) throw new CustomError("not found",404)

    return await prisma.rol.delete({where:{id}})
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}

export async function updateRol({ id, name }: { id: number; name: string }) {
	const user = await prisma.rol.findFirst({ where: { id } });

	if (!user?.id) throw new Error("not found");

<<<<<<< HEAD
	return await prisma.rol.update({ where: { id }, data: { name } });
=======
    if (!user?.id) throw new CustomError("not found",404)

    return await prisma.rol.update({where:{id},data:{name}}); 
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}
