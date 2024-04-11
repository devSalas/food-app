import {  Response } from "express";

export function sendJsonResponse (res:Response,statusCode:number,data:any,message:string){
    res.status(statusCode).json({
        error:false,
        data,
        message
    })
}