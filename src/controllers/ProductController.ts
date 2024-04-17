import type { Request, Response } from "express";
import { validateProduct, validateProductPartial } from "../schemas/product";
import * as ProductService from "../services/ProductService";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";
import { sendJsonResponse } from "../utils/responseHttp";
import { verificarId } from "../utils/verificarId";

async function getProducts(req: Request, res: Response) {

	const {name,price}=req.query
	const filterPrice=Number(price)?Number(price):0
	const FilterName=!name?'':name.toLowerCase()
	
	const Products = await ProductService.getProducts(FilterName,filterPrice);

	sendJsonResponse(res, 200, Products, "all Products");
}

async function getProduct(req: Request, res: Response) {
  const id = verificarId(req.params.id);

  const product = await ProductService.getProduct(id);

  if (!product) throw new CustomError("Este producto no existe", 404);

  return sendJsonResponse(res, 200, product, "Producto encontrado");
}

async function createProduct(req: Request, res: Response) {
  const result = validateProduct(req.body);

  if (result.success) {
    const product = await ProductService.createProduct(result.data);
    return sendJsonResponse(res, 201, product, "Producto creado");
  }

  throw new CustomError("Error al crear un producto", 404);
}

async function updateProduct(req: Request, res: Response) {
  const id = verificarId(req.params.id);
  const result = validateProductPartial(req.body);

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
