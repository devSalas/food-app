"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRol = exports.deleteRol = exports.getRolbyName = exports.createRol = exports.getRoles = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getRoles() {
    const users = await prisma.rol.findMany();
    return users;
}
exports.getRoles = getRoles;
async function createRol({ name }) {
    const isexist = await prisma.rol.findFirst({ where: { name } });
    if (isexist?.id)
        throw new Error("email is already registered");
    const user = await prisma.rol.create({ data: { name } });
    return user;
}
exports.createRol = createRol;
async function getRolbyName({ name }) {
    const user = await prisma.rol.findFirst({ where: { name } });
    if (!user?.id)
        throw new Error("not found");
    return user;
}
exports.getRolbyName = getRolbyName;
async function deleteRol({ id }) {
    const user = await prisma.rol.findFirst({ where: { id } });
    if (!user?.id)
        throw new Error("not found");
    return await prisma.rol.delete({ where: { id } });
}
exports.deleteRol = deleteRol;
async function updateRol({ id, name }) {
    const user = await prisma.rol.findFirst({ where: { id } });
    if (!user?.id)
        throw new Error("not found");
    return await prisma.rol.update({ where: { id }, data: { name } });
}
exports.updateRol = updateRol;
