import type { NextFunction, Request, Response } from "express";
import { jwtDecode } from "../utils/jwt/jwt";
import { sendJsonResponse } from "../utils/responseHttp";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;
  if (header === undefined)
    return sendJsonResponse(res, 401, null, "token not found or expired");

  const token = header.split(" ")[1];
  try {
      const { id: payload }: any = await jwtDecode({ token });
      req.id=payload 
      next();
  } catch (error) {
    return sendJsonResponse(res, 401, null, "token not found or expired");
  }
}
