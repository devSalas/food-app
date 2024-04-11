import type { NextFunction, Request, Response } from "express";
import { jwtDecode } from "../utils/jwt/jwt";
import { CustomError } from "../utils/errors";
import { sendJsonResponse } from "../utils/responseHttp";

export async function authMiddleware(req:Request,res:Response,next:NextFunction) {

    const {id}=req.body
    const header=req.headers.authorization
    if (header===undefined) return sendJsonResponse(res,401,null,"token not found or expired")
    
    const token=header.split(" ")[1]

    try {
        const {id:payload}=await jwtDecode({token})
        if(payload===id){
            next()
        }else{
            throw new Error("");
        }
    } catch (error) {
      return  sendJsonResponse(res,401,null,"token not found or expired")
    }
    
}
