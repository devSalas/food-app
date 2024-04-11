import type { Response } from "express";

export function errorResponse(
	res: Response,
	statusCode: number,
	message: string,
) {
	return res.status(statusCode || 500).json({
		error: true,
		data: null,
		message: message,
	});
}
