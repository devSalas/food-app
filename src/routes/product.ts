import { Router } from "express";
import { clientController } from "../controllers/ClientController";
import { ProductController } from "../controllers/ProductController";

export const productRouter  = Router()

productRouter
    .get('/products',ProductController.getProducts)
    .get('/products/:id',ProductController.getProduct)
    .post('/products/create',ProductController.createProduct)
    .put('/products/update/:id', ProductController.updateProduct)
    .delete('/products/delete/:id',ProductController.deleteProduct) 