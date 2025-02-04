import { Router } from "express";
import { orderController } from "../controllers/OrderController";
import { validateOrder } from "../dtos/order";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

export const orderRouter = Router();

orderRouter
  .get("/orders", orderController.getOrders)
  .get("/orders/:id", orderController.getOrder)
  .post("/orders/create",authMiddleware.authMiddleware,adminMiddleware, validateOrder,orderController.createOrder)
  .put("/orders/update/:id",authMiddleware.authMiddleware,adminMiddleware, orderController.updateOrder)
  .delete("/orders/delete/:id",authMiddleware.authMiddleware,adminMiddleware, orderController.deleteOrder);
