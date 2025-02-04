import type { NextFunction, Request, Response } from "express";
import zod from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const rolSchema=zod.object({
    name:zod.string().min(0,'Debe contener caracteres')
})


export function validateRol(req:Request,res:Response,next:NextFunction){
    try {
       const rolValid= rolSchema.parse(req.body)
       next()
    } catch (error:any) {
        const errors= error?.errors?.map((e:any)=>e.message)
        sendJsonResponse(res,400,null,errors[0])
     }
}