"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
exports.productRouter = (0, express_1.Router)();
exports.productRouter
    .get("/products", ProductController_1.ProductController.getProducts)
    .get("/products/:id", ProductController_1.ProductController.getProduct)
    .post("/products/create", ProductController_1.ProductController.createProduct)
    .put("/products/update/:id", ProductController_1.ProductController.updateProduct)
    .delete("/products/delete/:id", ProductController_1.ProductController.deleteProduct);
