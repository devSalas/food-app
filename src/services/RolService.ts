import  prisma  from "../utils/prismaClient";
import { CustomError } from "../utils/errors";

export async function getRoles() {
  const roles = await prisma.rol.findMany();

  return roles;
}

export async function createRol({ name }: { name: string }) {
  const isexist = await prisma.rol.findFirst({ where: { name } });

  if (isexist?.id) throw new CustomError("rol existed",400);

  const rol=await prisma.rol.create({data:{name}})

  return rol;
}

export async function getRolbyId({ id }: { id: number }) {
  const rol = await prisma.rol.findFirst({ where: { id } });

  if (!rol?.id) throw new CustomError("not found", 404);

  return rol;
}
export async function getRolbyName({ name }: { name: string }) {
  
  const rol = await prisma.rol.findFirst({ where: { name } });
  
  if (!rol?.id) throw new CustomError("not found", 404);

  return rol;
}

export async function deleteRol({ id }: { id: number }) {
  const rol = await prisma.rol.findFirst({ where: { id } });

  if (!rol?.id) throw new CustomError("not found", 404);

  return await prisma.rol.delete({ where: { id } });
}

export async function updateRol({ id, name }: { id: number; name: string }) {
  const rol = await prisma.rol.findFirst({ where: { id } });

  if (!rol?.id) throw new CustomError("not found", 404);

  return await prisma.rol.update({ where: { id }, data: { name } });
}
