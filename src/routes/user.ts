import { Router } from "express";
import  * as UserController from "../controllers/UserController";

const userRouter = Router()


userRouter
        .get('/users/',UserController.getUsers)
        .post('/users/',UserController.createUser)
        .get('/users/:name',UserController.findUserbyName)
        .delete('/users/',UserController.deleteUser)
        .put('/users/',UserController.updateUser);
    



export default userRouter