import type { NextFunction, Response } from "express";
import type { CustomRequest } from "../types/CustomRequest";
import prisma from "../utils/prismaClient";
import { sendJsonResponse } from "../utils/responseHttp";

export async function clientMiddleware(req:CustomRequest,res:Response,next:NextFunction) {
    
    const roles=['client','admin']

    const {id}=req

    const userRol=await prisma.user.findFirst({where:{id},select:{rol:true}})
    
    if (!userRol?.rol.id) return sendJsonResponse(res,403,null,"Forbidden")  

    if (!roles.includes(userRol?.rol.name.toLocaleLowerCase())) return sendJsonResponse(res,403,null,"Forbidden") 

    next()
}