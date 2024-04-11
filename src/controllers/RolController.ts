import type { Request, Response } from "express"
import  * as services from '../services/RolService'
import { sendJsonResponse } from "../utils/responseHttp"
import { catchedAsync } from "../utils/catchedAsync"

export async function getRoles(req: Request, res: Response) {

    const roles  = await services.getRoles()
    sendJsonResponse(res,201,roles,"roles found")
}

export async function createRol(req: Request, res: Response) {


        const {name}=req.body
        
        const rol  = await services.createRol({name})
        sendJsonResponse(res,201,rol,"rol created")
    

}

export async function findRolbyName(req: Request, res: Response) {
    
    const {name}=req.params
    const rol = await services.getRolbyName({name})
    sendJsonResponse(res,200,rol,"rol found")
 

	res.status(200).json({ message: "gerson junior", data: rol });

}

export async function deleteRol(req: Request, res: Response) {
      
    const {id}=req.body

    const rol = await services.deleteRol({id}) 

    sendJsonResponse(res,204,rol,"rol deleted")

}

export async function updateRol(req: Request, res: Response) {
    
    const {id}=req.body
    const {name}=req.body

    const rol  = await services.updateRol({id,name})
    
    sendJsonResponse(res,200,rol,"rol updated")
}

export const RolController = {
    getRoles: catchedAsync(getRoles),
    getRol: catchedAsync(findRolbyName),
    createRol:catchedAsync(createRol),
    updateRol:catchedAsync(updateRol),
    deleteRol:catchedAsync(deleteRol)
}



