import { Router } from "express";
import userRouter from "./user";

export const routes = Router()


routes
    .use(userRouter)
