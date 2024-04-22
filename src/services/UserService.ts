import { PrismaClient } from "@prisma/client";
import { EncryptPassword, decodePassword } from "../utils/bcrypt/EncryptPassword";
import { CustomError } from "../utils/errors";
import { getRolbyName } from "./RolService";
import { UploadImage } from "../utils/cloudinary/UploadImage";

const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      address: true,
      email: true,
      id: true,
      image: true,
      name: true,
      rol_id: true,
    },
  });

  return users;
}
export async function createUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const isexist = await prisma.user.findFirst({ where: { email } });

  if (isexist?.id) throw new CustomError("Email is already registered", 400);

  const passwordEncrypt = await EncryptPassword({ password });

  const rol = await getRolbyName({ name: "client" });

  if (!rol.id) throw new CustomError("Server Error", 500);

  const name=email.split('@')[0]
  const image=''

  const user = await prisma.user.create({
    data: {
      address:'',
      email,
      password: passwordEncrypt,
      name,
      image,
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
      createdAt:true,
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
  name,
  buffer
}: {
  id: number;
  name: string;
  buffer: any;
}) {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user?.id) throw new CustomError("not found", 404);

  let image:any
    if (buffer) {
        image=await UploadImage({buffer})
        if (!image) throw new Error("Error image")
    }

  const oldImage=!image?user.image:buffer

  return await prisma.user.update({
    where: { id },
    data: { name,image:oldImage},
  });
}


export async function updatePassword({id,newPassword,oldPassword}:{id:number,oldPassword:string,newPassword:string}) {

  const existUser=await prisma.user.findFirst({where:{id}})

  if (!existUser?.id) throw new CustomError("user not found",404)

  const verifyPassword= await decodePassword({passwordEncripted:existUser.password,password:oldPassword})

  if (!verifyPassword) throw new CustomError("Password incorrect",403);

  const newPasswordHashed=await EncryptPassword({password:newPassword})

  const updateUser=await prisma.user.update({where:{id},data:{password:newPasswordHashed}})

  return updateUser
}