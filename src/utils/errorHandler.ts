import { Prisma } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { errorResponse } from "./errorResponse";
import type { CustomError } from "./errors";

export function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Verifica si el error es debido a una restricción de clave externa
    console.log("netro");
    if (err.code === "P2003") {
      return errorResponse(
        res,
        err.statusCode,
        "problemas con el foreing key ,puede ser que sea que estes agregando un id que no existe o eliminando un id que esta en uso"
      );
      // Aquí puedes manejar el error de acuerdo a tus necesidades, como devolver un mensaje al usuario
    }

    return errorResponse(
      res,
      err.statusCode,
      "Ocurrio un Error con prisma al realizar la operación"
    );
  }

  if (err instanceof Prisma.PrismaClientInitializationError) {
    return errorResponse(
      res,
      err.statusCode,
      "No se pudo realizar la conexion con la base de datos"
    );
  }

  return errorResponse(res, err.statusCode, err.message);
}
