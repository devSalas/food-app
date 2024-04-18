"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype); // Restaurar el prototipo
        this.name = "ClientError"; // Establecer el nombre del error
    }
}
exports.CustomError = CustomError;
