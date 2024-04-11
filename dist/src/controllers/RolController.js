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
exports.updateRol =
	exports.deleteRol =
	exports.findRolbyName =
	exports.createRol =
	exports.getRoles =
		void 0;
const services = __importStar(require("../services/RolService"));
async function getRoles(req, res) {
	const roles = await services.getRoles();
	return res.status(200).json({ message: "gerson junior", data: roles });
}
exports.getRoles = getRoles;
async function createRol(req, res) {
	const { name } = req.body;
	try {
		const roles = await services.createRol({ name });
		res.status(201).json({ message: "gerson junior created" });
	} catch (error) {
		res.status(400).json({ message: "msg" });
	}
}
exports.createRol = createRol;
async function findRolbyName(req, res) {
	const { name } = req.params;
	try {
		const user = await services.getRolbyName({ name });
		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.findRolbyName = findRolbyName;
async function deleteRol(req, res) {
	const { id } = req.body;
	try {
		const user = await services.deleteRol({ id });
		res.status(204).json({ message: "gerson junior delete" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.deleteRol = deleteRol;
async function updateRol(req, res) {
	const { id } = req.body;
	const { name } = req.body;
	try {
		const user = await services.updateRol({ id, name });
		res.status(200).json({ message: "gerson junior update" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
exports.updateRol = updateRol;
