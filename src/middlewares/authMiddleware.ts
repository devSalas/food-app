import type { NextFunction, Request, Response } from "express";
import { jwtDecode } from "../utils/jwt/jwt";
import type{ CustomRequest } from "../types/CustomRequest";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";

export async function jwtMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;
  
  if (header === undefined) {
    const err=new CustomError("Bearer token not found",400)
    return next(err)
  }
  const token = header.split(" ")[1];
  
  const { id: payload }: any = await jwtDecode({ token });
  
  if (payload==null || payload===undefined) {
      const err=new CustomError("Payload jwt not found",403)
      return next(err)
    }
    req.id=Number(payload) 
    next();
}

export const authMiddleware={
  authMiddleware:catchedAsync(jwtMiddleware)
}
