import * as CategoryService from "../services/CategoryService";
import type { Response, Request } from "express";
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";

async function getCategories(req: Request, res: Response) {
	const categories = await CategoryService.getCategories();

	sendJsonResponse(res, 400, categories, "all categories");
}

async function getCategory(req: Request, res: Response) {
	const id = req.params.id;

	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);

	const idNumber = Number.parseInt(id);

	const category = await CategoryService.getCategory(idNumber);

	if (!category) throw new CustomError("esta categoria no existe", 404);

	return sendJsonResponse(res, 200, category, "categoria con exito");
}

async function createCategory(req: Request, res: Response) {
	const categoryCreated = await CategoryService.createCategory(req.body);

	return sendJsonResponse(res, 201, categoryCreated, "created category");
}

async function updateCategory(req: Request, res: Response) {
	const id = req.params.id;
	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);

	const idNumber = Number.parseInt(id);
	const body = req.body;

	const categoryUpdated = await CategoryService.updateCategory(idNumber, body);
	return sendJsonResponse(res, 200, categoryUpdated, "update category");
}
async function deleteCategory(req: Request, res: Response) {
	const id = req.params.id;
	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);

	const idNumber = Number.parseInt(id);

	const categoryDeleted = await CategoryService.deleteCategory(idNumber);
	return sendJsonResponse(res, 200, categoryDeleted, "delete category");
}

export const CategoryController = {
	getCategories: catchedAsync(getCategories),
	getCategory: catchedAsync(getCategory),
	createCategory: catchedAsync(createCategory),
	updateCategory: catchedAsync(updateCategory),
	deleteCategory: catchedAsync(deleteCategory),
};
