import * as OrderDetailService from "../services/OrderDetail";
import type { Request, Response } from "express";
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";

async function getOrderDetails(req: Request, res: Response) {
	const categories = await OrderDetailService.getOrderDetails();

	sendJsonResponse(res, 400, categories, "all categories");
}

async function getOrderDetail(req: Request, res: Response) {
	const id = req.params.id;

	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);

	const category = await OrderDetailService.getOrderDetail(+id);

	if (!category) throw new CustomError("esta orden de detalle no existe", 404);

	return sendJsonResponse(res, 200, category, "orden de detalle con exito");
}

async function createOrderDetail(req: Request, res: Response) {
	const categoryCreated = await OrderDetailService.createOrderDetail(req.body);
	return sendJsonResponse(res, 201, categoryCreated, "created category");
}

async function updateOrderDetail(req: Request, res: Response) {
	const id = req.params.id;
	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);
	const idNumber = Number.parseInt(id);
	const body = req.body;

	const categoryUpdated = await OrderDetailService.updateOrderDetail(
		idNumber,
		body,
	);
	return sendJsonResponse(res, 200, categoryUpdated, "update category");
}

async function deleteOrderDetail(req: Request, res: Response) {
	const id = req.params.id;
	if (!/^\d+$/.test(id))
		throw new CustomError("el id tiene que ser un numero", 400);
	const idNumber = Number.parseInt(id);

	const categoryDeleted = await OrderDetailService.deleteOrderDetail(idNumber);
	return sendJsonResponse(res, 200, categoryDeleted, "delete category");
}

export const OrderDetailController = {
	getOrderDetails: catchedAsync(getOrderDetails),
	getOrderDetail: catchedAsync(getOrderDetail),
	createOrderDetail: catchedAsync(createOrderDetail),
	updateOrderDetail: catchedAsync(updateOrderDetail),
	deleteOrderDetail: catchedAsync(deleteOrderDetail),
};
