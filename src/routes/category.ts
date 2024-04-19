import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { validateCategory } from "../dtos/category";

export const categoryRouter = Router();

categoryRouter
  .get("/categories", CategoryController.getCategories)
  .get("/categories/:id", CategoryController.getCategory)
  .post("/categories/create",validateCategory, CategoryController.createCategory)
  .put("/categories/update/:id", CategoryController.updateCategory)
  .delete("/categories/delete/:id", CategoryController.deleteCategory);
