<<<<<<< HEAD
import type { Request, Response } from "express";
import * as services from "../services/RolService";
=======
import type { Request, Response } from "express"
import  * as services from '../services/RolService'
import { sendJsonResponse } from "../utils/responseHttp"
import { catchedAsync } from "../utils/catchedAsync"
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

export async function getRoles(req: Request, res: Response) {
	const roles = await services.getRoles();

<<<<<<< HEAD
	return res.status(200).json({ message: "gerson junior", data: roles });
=======
    const roles  = await services.getRoles()
    sendJsonResponse(res,201,roles,"roles found")
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}

export async function createRol(req: Request, res: Response) {
	const { name } = req.body;

<<<<<<< HEAD
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
=======
        const {name}=req.body
        
        const rol  = await services.createRol({name})
        sendJsonResponse(res,201,rol,"rol created")
    

}

export async function findRolbyName(req: Request, res: Response) {
    
    const {name}=req.params
    const rol = await services.getRolbyName({name})
    sendJsonResponse(res,200,rol,"rol found")
 
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}

export async function deleteRol(req: Request, res: Response) {
	const { id } = req.body;
	try {
		const user = await services.deleteRol({ id });

<<<<<<< HEAD
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
=======
      
    const {id}=req.body

    const rol = await services.deleteRol({id}) 

    sendJsonResponse(res,204,rol,"rol deleted")

}
export async function updateRol(req: Request, res: Response) {
    
    const {id}=req.body
    const {name}=req.body

    const rol  = await services.updateRol({id,name})
    
    sendJsonResponse(res,200,rol,"rol updated")

>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

		res.status(200).json({ message: "gerson junior update" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
<<<<<<< HEAD
=======

export const RolController = {
    getRoles: catchedAsync(getRoles),
    getRol: catchedAsync(findRolbyName),
    createRol:catchedAsync(createRol),
    updateRol:catchedAsync(updateRol),
    deleteRol:catchedAsync(deleteRol)
}



>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
