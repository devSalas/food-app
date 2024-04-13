"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const rol_1 = __importDefault(require("./rol"));
const category_1 = require("./category");
const client_1 = require("./client");
const product_1 = require("./product");
const order_1 = require("./order");
const orderDetail_1 = require("./orderDetail");
const auth_1 = require("./auth");
exports.routes = (0, express_1.Router)();
exports.routes
    .use(user_1.default)
    .use(rol_1.default)
    .use(category_1.categoryRouter)
    .use(client_1.clientRouter)
    .use(product_1.productRouter)
    .use(order_1.orderRouter)
    .use(orderDetail_1.orderDetailRouter)
    .use(auth_1.authRoute);
