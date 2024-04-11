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
exports.ProductController = void 0;
const ProductService = __importStar(require("../services/ProductService"));
const responseHttp_1 = require("../utils/responseHttp");
const catchedAsync_1 = require("../utils/catchedAsync");
const errors_1 = require("../utils/errors");
async function getProducts(req, res) {
    const Products = await ProductService.getProducts();
    (0, responseHttp_1.sendJsonResponse)(res, 400, Products, "all Products");
}
async function getProduct(req, res) {
    const id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const Product = await ProductService.getProduct(+id);
    if (!Product)
        throw new errors_1.CustomError("esta producto no existe", 404);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, Product, "producto con exito");
}
async function createProduct(req, res) {
    const ProductCreated = await ProductService.createProduct(req.body);
    return (0, responseHttp_1.sendJsonResponse)(res, 201, ProductCreated, 'created Product');
}
async function updateProduct(req, res) {
    const id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = parseInt(id);
    const body = req.body;
    const ProductUpdated = await ProductService.updateProduct(idNumber, body);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, ProductUpdated, "update Product");
}
async function deleteProduct(req, res) {
    let id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = parseInt(id);
    const ProductDeleted = await ProductService.deleteProduct(idNumber);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, ProductDeleted, "delete Product");
}
exports.ProductController = {
    getProducts: (0, catchedAsync_1.catchedAsync)(getProducts),
    getProduct: (0, catchedAsync_1.catchedAsync)(getProduct),
    createProduct: (0, catchedAsync_1.catchedAsync)(createProduct),
    updateProduct: (0, catchedAsync_1.catchedAsync)(updateProduct),
    deleteProduct: (0, catchedAsync_1.catchedAsync)(deleteProduct)
};
