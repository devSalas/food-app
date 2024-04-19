import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { validateProduct } from "../dtos/productDto";

export const productRouter = Router();

productRouter
  .get("/products", ProductController.getProducts)
  .get("/products/:id", ProductController.getProduct)
  .post("/products/create",validateProduct, ProductController.createProduct)
  .put("/products/update/:id", ProductController.updateProduct)
  .delete("/products/delete/:id", ProductController.deleteProduct);
