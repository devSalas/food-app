"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
			}
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
			});
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", { enumerable: true, value: v });
			}
		: function (o, v) {
				o["default"] = v;
			});
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser =
	exports.deleteUser =
	exports.findUserbyName =
	exports.findUserbyId =
	exports.createUser =
	exports.getUsers =
		void 0;
const services = __importStar(require("../services/UserService"));
async function getUsers(req, res) {
	try {
		const users = await services.getUsers();
		return res.status(200).json({ message: "gerson junior", data: users });
	} catch (error) {}
}
exports.getUsers = getUsers;
async function createUser(req, res) {
	const { address, email, image, name, password } = req.body;
	try {
		const users = await services.createUser({
			address,
			email,
			image: "",
			name,
			password,
		});
		res.status(201).json({ message: "gerson junior created" });
	} catch (error) {
		res.status(400).json({ message: "msg" });
	}
}
exports.createUser = createUser;
async function findUserbyId(req, res) {
	const id = 2;
	try {
		const user = await services.getUserbyId({ id });
		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.findUserbyId = findUserbyId;
async function findUserbyName(req, res) {
	const { name } = req.params;
	try {
		const user = await services.getUserbyName({ name });
		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.findUserbyName = findUserbyName;
async function deleteUser(req, res) {
	const id = 2;
	try {
		const user = await services.deleteUser({ id });
		res.status(204).json({ message: "gerson junior delete" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.deleteUser = deleteUser;
async function updateUser(req, res) {
	const id = 2;
	const { address, email, image, name, password } = req.body;
	try {
		const user = await services.updateUser({
			id,
			address,
			email,
			image,
			name,
			password,
		});
		res.status(200).json({ message: "gerson junior update" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.updateUser = updateUser;
