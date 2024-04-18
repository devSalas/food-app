import { CustomError } from "./errors";

export const verificarId = (id: string): number => {
  if (!/^\d+$/.test(id))
    throw new CustomError("El id tiene que ser un numero", 400);
  return Number.parseInt(id);
};
