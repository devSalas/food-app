import { Router } from "express";
import { OrderDetailController } from "../controllers/OrderDatailController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const orderDetailRouter = Router();

orderDetailRouter
  .get("/orderdetails",authMiddleware, OrderDetailController.getOrderDetails)
  .get("/orderdetails/:id",authMiddleware, OrderDetailController.getOrderDetail)
  .post("/orderdetails/create",authMiddleware, OrderDetailController.createOrderDetail)
  .get("/orderdetails/update",authMiddleware, OrderDetailController.updateOrderDetail)
  .get("/orderdetails/delete",authMiddleware, OrderDetailController.deleteOrderDetail);
