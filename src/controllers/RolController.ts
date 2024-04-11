import type { Request, Response } from "express";
import * as services from "../services/RolService";

export async function getRoles(req: Request, res: Response) {
	const roles = await services.getRoles();

	return res.status(200).json({ message: "gerson junior", data: roles });
}

export async function createRol(req: Request, res: Response) {
	const { name } = req.body;

	try {
		const roles = await services.createRol({ name });
		res.status(201).json({ message: "gerson junior created" });
	} catch (error) {
		res.status(400).json({ message: "msg" });
	}
}

export async function findRolbyName(req: Request, res: Response) {
	const { name } = req.params;
	try {
		const user = await services.getRolbyName({ name });

		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}

export async function deleteRol(req: Request, res: Response) {
	const { id } = req.body;
	try {
		const user = await services.deleteRol({ id });

		res.status(204).json({ message: "gerson junior delete" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
export async function updateRol(req: Request, res: Response) {
	const { id } = req.body;
	const { name } = req.body;
	try {
		const user = await services.updateRol({ id, name });

		res.status(200).json({ message: "gerson junior update" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
