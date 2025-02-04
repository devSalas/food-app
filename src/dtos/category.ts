import type { NextFunction, Request, Response } from "express";
import zod from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const categorySchema=zod.object({
    file:zod.any(),
    name:zod.string().min(1,"Al menos 1 caracter").max(50,'Maximo 50 caracteres'),
})


export function validateCategory(req:Request,res:Response,next:NextFunction){
    try {
       const categoryValid= categorySchema.parse(req.body)
       next()
    } catch (error:any) {
        const errors= error?.errors?.map((e:any)=>e.message)
        sendJsonResponse(res,400,null,errors[0])
     }
}