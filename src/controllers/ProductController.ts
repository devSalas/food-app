import * as ProductService from "../services/ProductService";
import type { Response, Request } from "express";
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";
async function getProducts(req: Request, res: Response) {
	const Products = await ProductService.getProducts();

	sendJsonResponse(res, 400, Products, "all Products");
}

async function getProduct(req: Request, res: Response) {
	const id = req.params.id;

	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);

	const Product = await ProductService.getProduct(+id);

	if (!Product) throw new CustomError("esta producto no existe", 404);

	return sendJsonResponse(res, 200, Product, "producto con exito");
}

async function createProduct(req: Request, res: Response) {
	const ProductCreated = await ProductService.createProduct(req.body);
	return sendJsonResponse(res, 201, ProductCreated, "created Product");
}

async function updateProduct(req: Request, res: Response) {
	const id = req.params.id;
	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);
	const idNumber = Number.parseInt(id);
	const body = req.body;

	const ProductUpdated = await ProductService.updateProduct(idNumber, body);
	return sendJsonResponse(res, 200, ProductUpdated, "update Product");
}
async function deleteProduct(req: Request, res: Response) {
	const id = req.params.id;
	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);
	const idNumber = Number.parseInt(id);

	const ProductDeleted = await ProductService.deleteProduct(idNumber);
	return sendJsonResponse(res, 200, ProductDeleted, "delete Product");
}

export const ProductController = {
	getProducts: catchedAsync(getProducts),
	getProduct: catchedAsync(getProduct),
	createProduct: catchedAsync(createProduct),
	updateProduct: catchedAsync(updateProduct),
	deleteProduct: catchedAsync(deleteProduct),
};
