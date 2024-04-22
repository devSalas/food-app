import type { NextFunction, Request, Response } from "express";
import zod, { any } from "zod";
import { sendJsonResponse } from "../utils/responseHttp";


const productSchema=zod.object({
    name:zod.string().min(1,'Minimo un caracter').max(50,'Maximo 50 caracteres'),
    price:zod.number().min(1,'Debe ser posittivo'),
    category_id:zod.number().min(0,'Debe ser mayor a cero'),
    description:zod.string().min(0).max(50,'Maximo 50 caracteres'),
    ingredients:zod.string().min(0).max(50,'Maximo 50 caracteres'),
    image:zod.any()
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