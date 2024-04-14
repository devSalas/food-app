import { type Client, PrismaClient } from "@prisma/client";

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
  const clientCreated = await prisma.client.create({ data: client });
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
