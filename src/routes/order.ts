import { Router } from "express";
import { orderController } from "../controllers/OrderController";

export const orderRouter  = Router()

orderRouter
    .get('/orders',orderController.getOrders)
    .get('/orders/:id',orderController.getOrder)
    .post('/orders/create',orderController.createOrder)
    .put('/orders/update/:id',orderController.updateOrder)
    .delete('/orders/delete/:id',orderController.deleteOrder)