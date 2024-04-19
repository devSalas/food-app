import { PrismaClient } from "@prisma/client";
import type { Client } from "../types/client";
import { CustomError } from "../utils/errors";
import { EncryptPassword } from "../utils/bcrypt/EncryptPassword";

const prisma = new PrismaClient();

export async function getClients() {
  const clients = await prisma.client.findMany();
  console.log({ clients, m: "hok" });
  return clients;
}
export async function getClient(id: number) {
  const newclient = await prisma.client.findFirst({
    where: {
      id,
    },
  });
  return newclient;
}
export async function createClient(client: Client) {

  const {email,password}=client
  
  const existUser=await prisma.client.findFirst({where:{email}})
  
  if (!existUser?.id) throw new CustomError("Email is already used",400);
  
  const name= email.split(' ')[0]
  const passwordHashed=await EncryptPassword({password})

  const clientCreated = await prisma.client.create({ data:{email,password:passwordHashed,name,image:'',address:'',phone:''}});
  return clientCreated;
}
export async function updateClient(id: number, client: Client) {
  const clientUpdated = await prisma.client.update({
    where: { id: id },
    data: { ...client },
  });
  return clientUpdated;
}
export async function deleteClient(id: number) {
  const clientDeleted = await prisma.client.delete({
    where: { id: id },
  });
  return clientDeleted;
}
