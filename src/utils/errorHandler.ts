import { NextFunction, Request, Response } from "express";
import { CustomError } from "./errors";
import { Prisma } from "@prisma/client";
import { errorResponse } from "./errorResponse";

export function errorHandler(err: CustomError, req: Request, res: Response, next: NextFunction) {



    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // Verifica si el error es debido a una restricción de clave externa
        console.log("netro")
        if (err.code === 'P2003') {
            return errorResponse(res,err.statusCode,"No se puede eliminar el dato porque tiene foreign keys en uso",);
            // Aquí puedes manejar el error de acuerdo a tus necesidades, como devolver un mensaje al usuario
        } else {
            return errorResponse(res,err.statusCode,"Ocurrio un Error con prisma al realizar la operación");
            
        }
    }

    if (err instanceof Prisma.PrismaClientInitializationError){
        return errorResponse(res,err.statusCode,"No se pudo realizar la conexion con la base de datos");
    }

    
    return errorResponse(res,err.statusCode,err.message)
}




