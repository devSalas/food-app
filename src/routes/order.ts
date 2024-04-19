import { Router } from "express";
import { orderController } from "../controllers/OrderController";
import { validateOrder } from "../dtos/order";

export const orderRouter = Router();

orderRouter
  .get("/orders", orderController.getOrders)
  .get("/orders/:id", orderController.getOrder)
  .post("/orders/create", validateOrder,orderController.createOrder)
  .put("/orders/update/:id", orderController.updateOrder)
  .delete("/orders/delete/:id", orderController.deleteOrder);
