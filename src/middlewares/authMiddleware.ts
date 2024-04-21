import type { NextFunction, Request, Response } from "express";
import { jwtDecode } from "../utils/jwt/jwt";
import type{ CustomRequest } from "../types/CustomRequest";

export async function authMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;
  const {id}=req.params
  
  if (header === undefined) return res.status(401).json({error:true,data:null,message:"token not found or expired"})
    const token = header.split(" ")[1];
  try {
    const { id: payload }: any = await jwtDecode({ token });

    if (+id!==payload) return res.status(403).json({error:true,data:null,message:"Forbidden"})
      req.id=Number(payload) 
      next();

  } catch (error) {
    return res.status(401).json({error:true,data:null,message:"token not found or expired"})
  }
}
