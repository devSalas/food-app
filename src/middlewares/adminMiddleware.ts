import type { NextFunction, Response } from "express";
import type { CustomRequest } from "../types/CustomRequest";
import prisma from "../utils/prismaClient";
import { sendJsonResponse } from "../utils/responseHttp";

export async function adminMiddleware(req:CustomRequest,res:Response,next:NextFunction) {
    
    const {id}=req

    const userRol=await prisma.user.findFirst({where:{id},select:{rol:true}})

    if (userRol?.rol.name.toLocaleLowerCase()!=='admin') return sendJsonResponse(res,403,null,"Forbidden") 

    next()
}