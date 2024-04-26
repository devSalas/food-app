import type { Request, Response } from "express";
import * as OrderService from "../services/OrderService";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";
import { sendJsonResponse } from "../utils/responseHttp";

async function getOrders(req: Request, res: Response) {
  const categories = await OrderService.getOrders();

  sendJsonResponse(res, 200, categories, "all orders");
}

async function getOrder(req: Request, res: Response) {
  const id = req.params.id;

  if (!/^\d+$/.test(id))
    throw new CustomError("el id tiene que ser un numero", 400);

  const order = await OrderService.getOrder(+id);

  if (!order) throw new CustomError("esta orden no existe", 404);

  return sendJsonResponse(res, 200, order, "orden con exito");
}

async function createOrder(req: Request, res: Response) {
  const categoryCreated = await OrderService.createOrder(req.body);
  return sendJsonResponse(res, 201, categoryCreated, "created order");
}

async function updateOrder(req: Request, res: Response) {
  const id = req.params.id;
  if (!/^\d+$/.test(id))
    throw new CustomError("el id tiene que ser un numero", 400);
  const idNumber = Number.parseInt(id);
  const body = req.body;

  const categoryUpdated = await OrderService.updateOrder(idNumber, body);
  return sendJsonResponse(res, 200, categoryUpdated, "update order");
}
async function deleteOrder(req: Request, res: Response) {
  const id = req.params.id;
  if (!/^\d+$/.test(id))
    throw new CustomError("el id tiene que ser un numero", 400);
  const idNumber = Number.parseInt(id);

  const categoryDeleted = await OrderService.deleteOrder(idNumber);
  return sendJsonResponse(res, 200, categoryDeleted, "delete order");
}


export const orderController = {
  getOrders: catchedAsync(getOrders),
  getOrder: catchedAsync(getOrder),
  createOrder: catchedAsync(createOrder),
  updateOrder: catchedAsync(updateOrder),
  deleteOrder: catchedAsync(deleteOrder),
};
