import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { validateCategory } from "../dtos/category";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

export const categoryRouter = Router();

categoryRouter
  .get("/categories", CategoryController.getCategories)
  .get("/categories/:id", CategoryController.getCategory)
  .post("/categories/create",authMiddleware,adminMiddleware,validateCategory, CategoryController.createCategory)
  .put("/categories/update/:id",authMiddleware,adminMiddleware, CategoryController.updateCategory)
  .delete("/categories/delete/:id",authMiddleware,adminMiddleware, CategoryController.deleteCategory);
