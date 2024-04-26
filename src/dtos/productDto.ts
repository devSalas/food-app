import type { NextFunction, Request, Response } from "express";
import zod, { any } from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const productSchema=zod.object({
    name:zod.string().min(1,'Minimo un caracter').max(50,'Maximo 50 caracteres'),
    price:zod.string(),
    category_id:zod.string(),
    description:zod.string().min(0).max(50,'Maximo 50 caracteres'),
    ingredients:zod.string().min(0).max(50,'Maximo 50 caracteres'),
})


export function validateProduct(req:Request,res:Response,next:NextFunction){
    try {
       const productValid= productSchema.parse(req.body)
       next()
    } catch (error:any) {
       const errors= error?.errors?.map((e:any)=>e.message)
       sendJsonResponse(res,400,null,errors[0])
    }
}