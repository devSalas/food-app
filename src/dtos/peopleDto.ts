import type { NextFunction, Request, Response } from "express";
import zod from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const peopleSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(7,"password must be 7 characters")
})


export function validateRegister(req:Request,res:Response,next:NextFunction){
    try {
        const userValid= peopleSchema.parse(req.body)
        
       next()
    } catch (error:any) {
        const errors= error?.errors?.map((e:any)=>e.message)
        sendJsonResponse(res,400,null,errors[0])
     }
}