import { Router } from "express";
import userRouter from "./user";
import rolRouter from "./rol";
import { categoryRouter } from "./category";

export const routes = Router()


routes
    .use(userRouter)
    .use(rolRouter)
    .use(categoryRouter)
