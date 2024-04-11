import { NextFunction, Request, Response } from "express";
import { CustomError } from "./errors";

export function errorHandler(err:CustomError, req: Request, res: Response, next: NextFunction) {
    res.status(err.statusCode || 500).json({
        error:false,
        data:null,
        message: err.message
    })
}