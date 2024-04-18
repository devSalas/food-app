import type { Request, Response } from "express";
import * as services from "../services/RolService";
import { catchedAsync } from "../utils/catchedAsync";
import { sendJsonResponse } from "../utils/responseHttp";

export async function getRoles(req: Request, res: Response) {
  const roles = await services.getRoles();
  sendJsonResponse(res, 201, roles, "roles found");
}

export async function createRol(req: Request, res: Response) {
  const { name } = req.body;

  const rol = await services.createRol({ name });
  sendJsonResponse(res, 201, rol, "rol created");
}

export async function getRol(req: Request, res: Response) {
  const { id } = req.params;
  const rolid = +id;
  const rol = await services.getRolbyId({ id: rolid });
  sendJsonResponse(res, 200, rol, "rol found");

  res.status(200).json({ message: "gerson junior", data: rol });
}

export async function deleteRol(req: Request, res: Response) {
  const { id } = req.params;
  const rolid = +id;

  const rol = await services.deleteRol({ id: rolid });

  sendJsonResponse(res, 204, rol, "rol deleted");
}

export async function updateRol(req: Request, res: Response) {
  const { id } = req.params;
  const rolid = +id;
  const { name } = req.body;

  const rol = await services.updateRol({ id: rolid, name });

  sendJsonResponse(res, 200, rol, "rol updated");
}

export const RolController = {
  getRoles: catchedAsync(getRoles),
  getRol: catchedAsync(getRol),
  createRol: catchedAsync(createRol),
  updateRol: catchedAsync(updateRol),
  deleteRol: catchedAsync(deleteRol),
};
