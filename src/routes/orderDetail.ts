import { Router } from "express";
import { OrderDetailController } from "../controllers/OrderDatailController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

export const orderDetailRouter = Router();

orderDetailRouter
  .get("/orderdetails",authMiddleware.authMiddleware,adminMiddleware, OrderDetailController.getOrderDetails)
  .get("/orderdetails/:id",authMiddleware.authMiddleware,adminMiddleware, OrderDetailController.getOrderDetail)
  .post("/orderdetails/create",authMiddleware.authMiddleware,adminMiddleware, OrderDetailController.createOrderDetail)
  .get("/orderdetails/update",authMiddleware.authMiddleware,adminMiddleware, OrderDetailController.updateOrderDetail)
  .get("/orderdetails/delete",authMiddleware.authMiddleware,adminMiddleware, OrderDetailController.deleteOrderDetail);
