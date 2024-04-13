import { Router } from "express";
import { OrderDetailController } from "../controllers/OrderDatailController";

export const orderDetailRouter = Router();

orderDetailRouter
	.get("/orderdetails", OrderDetailController.getOrderDetails)
	.get("/orderdetails/:id", OrderDetailController.getOrderDetail)
	.post("/orderdetails/create", OrderDetailController.createOrderDetail)
	.get("/orderdetails/update", OrderDetailController.updateOrderDetail)
	.get("/orderdetails/delete", OrderDetailController.deleteOrderDetail);
