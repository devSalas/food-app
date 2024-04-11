import { Router } from "express";
import userRouter from "./user";
import rolRouter from "./rol";
import { categoryRouter } from "./category";
import { clientRouter } from "./client";
import { productRouter } from "./product";
import { orderRouter } from "./order";
import { orderDetailRouter } from "./orderDetail";

export const routes = Router();

routes
	.use(userRouter)
	.use(rolRouter)
	.use(categoryRouter)
	.use(clientRouter)
	.use(productRouter)
	.use(orderRouter)
	.use(orderDetailRouter);
