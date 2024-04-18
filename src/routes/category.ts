import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

export const categoryRouter = Router();

categoryRouter
  .get("/categories", CategoryController.getCategories)
  .get("/categories/:id", CategoryController.getCategory)
  .post("/categories/create", CategoryController.createCategory)
  .put("/categories/update/:id", CategoryController.updateCategory)
  .delete("/categories/delete/:id", CategoryController.deleteCategory);
