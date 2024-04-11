"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const client_1 = require("@prisma/client");
const errorResponse_1 = require("./errorResponse");
function errorHandler(err, req, res, next) {
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        // Verifica si el error es debido a una restricción de clave externa
        console.log("netro");
        if (err.code === 'P2003') {
            return (0, errorResponse_1.errorResponse)(res, err.statusCode, "No se puede eliminar el dato porque tiene foreign keys en uso");
            // Aquí puedes manejar el error de acuerdo a tus necesidades, como devolver un mensaje al usuario
        }
        else {
            return (0, errorResponse_1.errorResponse)(res, err.statusCode, "Ocurrio un Error con prisma al realizar la operación");
        }
    }
    if (err instanceof client_1.Prisma.PrismaClientInitializationError) {
        return (0, errorResponse_1.errorResponse)(res, err.statusCode, "No se pudo realizar la conexion con la base de datos");
    }
    return (0, errorResponse_1.errorResponse)(res, err.statusCode, err.message);
}
exports.errorHandler = errorHandler;
