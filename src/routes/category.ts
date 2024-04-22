import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { validateCategory } from "../dtos/category";
import { authMiddleware } from "../middlewares/authMiddleware";

export const categoryRouter = Router();

categoryRouter
  .get("/categories", CategoryController.getCategories)
  .get("/categories/:id", CategoryController.getCategory)
  .post("/categories/create",authMiddleware,validateCategory, CategoryController.createCategory)
  .put("/categories/update/:id",authMiddleware, CategoryController.updateCategory)
  .delete("/categories/delete/:id",authMiddleware, CategoryController.deleteCategory);
