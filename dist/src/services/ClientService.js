"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClient = exports.getClients = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getClients() {
    const clients = await prisma.client.findMany();
    console.log({ clients, m: "hok" });
    return clients;
}
exports.getClients = getClients;
async function getClient(id) {
    const newclient = await prisma.client.findFirst({
        where: {
            id
        }
    });
    return newclient;
}
exports.getClient = getClient;
async function createClient(client) {
    const clientCreated = await prisma.client.create({ data: client });
    return clientCreated;
}
exports.createClient = createClient;
async function updateClient(id, client) {
    const clientUpdated = await prisma.client.update({
        where: { id: id },
        data: { ...client }
    });
    return clientUpdated;
}
exports.updateClient = updateClient;
async function deleteClient(id) {
    const clientDeleted = await prisma.client.delete({
        where: { id: id }
    });
    return clientDeleted;
}
exports.deleteClient = deleteClient;
