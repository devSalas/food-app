import { Router } from "express";
import userRouter from "./user";
import rolRouter from "./rol";
import { categoryRouter } from "./category";
import { clientRouter } from "./client";
import { productRouter } from "./product";
import { orderRouter } from "./order";
import { orderDetailRouter } from "./orderDetail";
import { authRoute } from "./auth";
import { image } from "./testImage";

export const routes = Router();

routes
	.get("/image", image)
	.use(userRouter)
	.use(rolRouter)
	.use(categoryRouter)
	.use(clientRouter)
	.use(productRouter)
	.use(orderRouter)
	.use(orderDetailRouter)
	.use(authRoute);
