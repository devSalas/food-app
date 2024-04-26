import type { NextFunction, Request, Response } from "express";
import zod from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const orderSchema=zod.object({
    user_id:zod.number().min(0),
    total:zod.number().min(0,'Debe ser mayor a 0'),
    payment_status:zod.enum(["EFECTIVO","YAPE"]),
    date:zod.date()
})


export function validateOrder(req:Request,res:Response,next:NextFunction){
    try {
       const orderValid= orderSchema.parse(req.body)
       next()
    } catch (error:any) {
        const errors= error?.errors?.map((e:any)=>e.message)
        sendJsonResponse(res,400,null,errors[0])
     }
}