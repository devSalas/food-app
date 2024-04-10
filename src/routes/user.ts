import { Router } from "express";
import  * as UserController from "../controllers/UserController";

const userRouter = Router()


userRouter
    .get('/users',UserController.getUsers);



export default userRouter