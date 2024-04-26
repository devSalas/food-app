import type { NextFunction, Request, Response } from "express";
import type { CustomRequest } from "../types/CustomRequest";

export const catchedAsync = (
	fn: (req: CustomRequest | Request, res: Response) => Promise<any>,
) => {
	return (req:CustomRequest| Request ,res: Response, next: NextFunction) => {
		fn(req, res).catch((err) => next(err));
	};
};
