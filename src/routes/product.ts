import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { validateProduct } from "../dtos/productDto";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

export const productRouter = Router();

productRouter
  .get("/products", ProductController.getProducts)
  .get("/products/:id", ProductController.getProduct)
  .post("/products/create",authMiddleware,adminMiddleware,validateProduct, ProductController.createProduct)
  .put("/products/update/:id",authMiddleware,adminMiddleware, ProductController.updateProduct)
  .delete("/products/delete/:id",authMiddleware,adminMiddleware, ProductController.deleteProduct);
