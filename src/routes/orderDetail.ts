import { Router } from "express";
import { OrderDetailController } from "../controllers/OrderDatailController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

export const orderDetailRouter = Router();

orderDetailRouter
  .get("/orderdetails",authMiddleware,adminMiddleware, OrderDetailController.getOrderDetails)
  .get("/orderdetails/:id",authMiddleware,adminMiddleware, OrderDetailController.getOrderDetail)
  .post("/orderdetails/create",authMiddleware,adminMiddleware, OrderDetailController.createOrderDetail)
  .get("/orderdetails/update",authMiddleware,adminMiddleware, OrderDetailController.updateOrderDetail)
  .get("/orderdetails/delete",authMiddleware,adminMiddleware, OrderDetailController.deleteOrderDetail);
