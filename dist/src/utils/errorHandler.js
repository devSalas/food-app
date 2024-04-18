"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const client_1 = require("@prisma/client");
const errorResponse_1 = require("./errorResponse");
function errorHandler(err, req, res, next) {
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        // Verifica si el error es debido a una restricción de clave externa
        console.log("netro");
        if (err.code === "P2003") {
            return (0, errorResponse_1.errorResponse)(res, err.statusCode, "problemas con el foreing key ,puede ser que sea que estes agregando un id que no existe o eliminando un id que esta en uso");
            // Aquí puedes manejar el error de acuerdo a tus necesidades, como devolver un mensaje al usuario
        }
        return (0, errorResponse_1.errorResponse)(res, err.statusCode, "Ocurrio un Error con prisma al realizar la operación");
    }
    if (err instanceof client_1.Prisma.PrismaClientInitializationError) {
        return (0, errorResponse_1.errorResponse)(res, err.statusCode, "No se pudo realizar la conexion con la base de datos");
    }
    return (0, errorResponse_1.errorResponse)(res, err.statusCode, err.message);
}
exports.errorHandler = errorHandler;
