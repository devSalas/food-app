import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { validateProduct } from "../dtos/productDto";
import { authMiddleware } from "../middlewares/authMiddleware";

export const productRouter = Router();

productRouter
  .get("/products", ProductController.getProducts)
  .get("/products/:id", ProductController.getProduct)
  .post("/products/create",authMiddleware,validateProduct, ProductController.createProduct)
  .put("/products/update/:id",authMiddleware, ProductController.updateProduct)
  .delete("/products/delete/:id",authMiddleware, ProductController.deleteProduct);
