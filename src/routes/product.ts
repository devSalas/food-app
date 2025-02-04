import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { validateProduct } from "../dtos/productDto";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import multer from "multer";


const upload = multer({storage:multer.memoryStorage()})
export const productRouter = Router();

productRouter
  .get("/products", ProductController.getProducts)
  .get("/products/:id", ProductController.getProduct)
  .post("/products/create",authMiddleware.authMiddleware,adminMiddleware,upload.single("file"), ProductController.createProduct)
  .put("/products/update/:id",authMiddleware.authMiddleware,adminMiddleware, ProductController.updateProduct)
  .delete("/products/delete/:id",authMiddleware.authMiddleware,adminMiddleware, ProductController.deleteProduct);
