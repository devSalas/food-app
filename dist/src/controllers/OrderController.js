"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const OrderService = __importStar(require("../services/OrderService"));
const responseHttp_1 = require("../utils/responseHttp");
const catchedAsync_1 = require("../utils/catchedAsync");
const errors_1 = require("../utils/errors");
async function getOrders(req, res) {
    const categories = await OrderService.getOrders();
    (0, responseHttp_1.sendJsonResponse)(res, 400, categories, "all orders");
}
async function getOrder(req, res) {
    const id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const order = await OrderService.getOrder(+id);
    if (!order)
        throw new errors_1.CustomError("esta orden no existe", 404);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, order, "orden con exito");
}
async function createOrder(req, res) {
    const categoryCreated = await OrderService.createOrder(req.body);
    return (0, responseHttp_1.sendJsonResponse)(res, 201, categoryCreated, 'created order');
}
async function updateOrder(req, res) {
    const id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = parseInt(id);
    const body = req.body;
    const categoryUpdated = await OrderService.updateOrder(idNumber, body);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, categoryUpdated, "update order");
}
async function deleteOrder(req, res) {
    let id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = parseInt(id);
    const categoryDeleted = await OrderService.deleteOrder(idNumber);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, categoryDeleted, "delete order");
}
exports.orderController = {
    getOrders: (0, catchedAsync_1.catchedAsync)(getOrders),
    getOrder: (0, catchedAsync_1.catchedAsync)(getOrder),
    createOrder: (0, catchedAsync_1.catchedAsync)(createOrder),
    updateOrder: (0, catchedAsync_1.catchedAsync)(updateOrder),
    deleteOrder: (0, catchedAsync_1.catchedAsync)(deleteOrder)
};
