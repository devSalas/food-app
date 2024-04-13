"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter
    .get("/orders", OrderController_1.orderController.getOrders)
    .get("/orders/:id", OrderController_1.orderController.getOrder)
    .post("/orders/create", OrderController_1.orderController.createOrder)
    .put("/orders/update/:id", OrderController_1.orderController.updateOrder)
    .delete("/orders/delete/:id", OrderController_1.orderController.deleteOrder);
