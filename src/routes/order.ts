import { Router } from "express";
import { orderController } from "../controllers/OrderController";
import { validateOrder } from "../dtos/order";
import { authMiddleware } from "../middlewares/authMiddleware";

export const orderRouter = Router();

orderRouter
  .get("/orders", orderController.getOrders)
  .get("/orders/:id", orderController.getOrder)
  .post("/orders/create",authMiddleware, validateOrder,orderController.createOrder)
  .put("/orders/update/:id",authMiddleware, orderController.updateOrder)
  .delete("/orders/delete/:id",authMiddleware, orderController.deleteOrder);
