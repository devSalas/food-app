"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getUsers() { return await prisma.user.findMany(); }
exports.getUsers = getUsers;
