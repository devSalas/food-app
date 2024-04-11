import { Router } from "express";
import userRouter from "./user";
import { categoryRouter } from "./category";

export const routes = Router()


routes
    .use(userRouter)
    .use(categoryRouter)
