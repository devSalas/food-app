import { Router } from "express";
import { authRoute } from "./auth";
import { categoryRouter } from "./category";
import { orderRouter } from "./order";
import { orderDetailRouter } from "./orderDetail";
import { productRouter } from "./product";
import rolRouter from "./rol";
import userRouter from "./user";
import { favoriteRoute } from "./favorite";
import { paymentRouter } from "./payment";


export const routes = Router();

routes
  .use(userRouter)
  .use(rolRouter)
  .use(categoryRouter)
  .use(productRouter)
  .use(orderRouter)
  .use(orderDetailRouter)
  .use(authRoute)
  .use(favoriteRoute)
  .use(paymentRouter)
