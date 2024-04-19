import type { NextFunction, Request, Response } from "express";
import zod from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const peopleSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(7,"password must be 7 characters").regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"Password must be Masyus word,minus word and one number"),
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