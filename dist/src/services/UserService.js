"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser =
	exports.deleteUser =
	exports.getUserbyId =
	exports.getUserbyName =
	exports.createUser =
	exports.getUsers =
		void 0;
const client_1 = require("@prisma/client");
const EncryptPassword_1 = require("../utils/bcrypt/EncryptPassword");
const RolService_1 = require("./RolService");
const prisma = new client_1.PrismaClient();
async function getUsers() {
	const users = await prisma.user.findMany();
	return users;
}
exports.getUsers = getUsers;
async function createUser({ email, password, name, address }) {
	const isexist = await prisma.user.findFirst({ where: { email } });
	if (isexist?.id) throw new Error("email is already registered");
	const passwordEncrypt = await (0, EncryptPassword_1.EncryptPassword)({
		password,
	});
	const rol = await (0, RolService_1.getRolbyName)({ name: "client" });
	if (!rol.id) throw new Error("Server Error");
	const user = await prisma.user.create({
		data: {
			address,
			email,
			password: passwordEncrypt,
			name,
			image: "",
			rol_id: rol.id,
		},
	});
	return user;
}
exports.createUser = createUser;
async function getUserbyName({ name }) {
	const user = await prisma.user.findFirst({ where: { name } });
	if (!user?.id) throw new Error("not found");
	return user;
}
exports.getUserbyName = getUserbyName;
async function getUserbyId({ id }) {
	const user = await prisma.user.findFirst({ where: { id } });
	if (!user?.id) throw new Error("not found");
	return user;
}
exports.getUserbyId = getUserbyId;
async function deleteUser({ id }) {
	const user = await prisma.user.findFirst({ where: { id } });
	if (!user?.id) throw new Error("not found");
	return await prisma.user.delete({ where: { id } });
}
exports.deleteUser = deleteUser;
async function updateUser({ id, email, password, name, address }) {
	const user = await prisma.user.findFirst({ where: { id } });
	if (!user?.id) throw new Error("not found");
	return await prisma.user.update({
		where: { id },
		data: { name, email, password, address },
	});
}
exports.updateUser = updateUser;
