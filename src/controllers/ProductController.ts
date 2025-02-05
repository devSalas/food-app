import type { Request, Response } from "express";
import { validateProduct, validateProductPartial } from "../schemas/product";
import * as ProductService from "../services/ProductService";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";
import { sendJsonResponse } from "../utils/responseHttp";
import { verificarId } from "../utils/verificarId";

async function getProducts(req: Request, res: Response) {
  const { name, price } = req.query;
  const filterPrice = Number(price) || 0;

  // Convertir el nombre a minúsculas o establecerlo como una cadena vacía si no está definido
  const filterName = name ? String(name).toLowerCase() : "";

  const Products = await ProductService.getProducts(filterName, filterPrice);

  sendJsonResponse(res, 200, Products, "all Products");
}

async function getProduct(req: Request, res: Response) {
  const id = verificarId(req.params.id);

  const product = await ProductService.getProduct(id);

  if (!product) throw new CustomError("Este producto no existe", 404);

  return sendJsonResponse(res, 200, product, "Producto encontrado");
}

async function createProduct(req: Request, res: Response) {
  const {category_id,description,ingredients,name,price}=req.body
  const file=req.file
  const image=file?.buffer?file.buffer:req.file
  
  const product = await ProductService.createProduct({data:{category_id:+category_id,description,ingredients,name,price:+price,image}});
   return sendJsonResponse(res, 201, product, "Producto creado");

}

async function updateProduct(req: Request, res: Response) {
  console.log("ingreso al controlador")
  const id = verificarId(req.params.id);
  const result = validateProductPartial(req.body);
  console.log("45",{result},id)
  if (result.success) {
    const product = await ProductService.updateProduct(id, result.data);
    return sendJsonResponse(res, 200, product, "Producto actualizado");
  }

  throw new CustomError("Error al actulizar", 404);
}

async function deleteProduct(req: Request, res: Response) {
  const id = verificarId(req.params.id);

  const ProductDeleted = await ProductService.deleteProduct(id);
  return sendJsonResponse(res, 200, ProductDeleted, "delete Product");
}

export const ProductController = {
  getProducts: catchedAsync(getProducts),
  getProduct: catchedAsync(getProduct),
  createProduct: catchedAsync(createProduct),
  updateProduct: catchedAsync(updateProduct),
  deleteProduct: catchedAsync(deleteProduct),
};
