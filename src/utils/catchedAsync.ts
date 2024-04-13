import type { Request, Response, NextFunction } from "express";

export const catchedAsync = (
	fn: (req: Request, res: Response) => Promise<any>,
) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res).catch((err) => next(err));
	};
};
