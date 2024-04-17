export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype); // Restaurar el prototipo
    this.name = "ClientError"; // Establecer el nombre del error
  }
}
