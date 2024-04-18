"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const CategoryController_1 = require("../controllers/CategoryController");
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter
    .get("/categories", CategoryController_1.CategoryController.getCategories)
    .get("/categories/:id", CategoryController_1.CategoryController.getCategory)
    .post("/categories/create", CategoryController_1.CategoryController.createCategory)
    .put("/categories/update/:id", CategoryController_1.CategoryController.updateCategory)
    .delete("/categories/delete/:id", CategoryController_1.CategoryController.deleteCategory);
