import { Router } from "express";
import userRouter from "./user";
import rolRouter from "./rol";

export const routes = Router()


routes
    .use(userRouter)
    .use(rolRouter)
