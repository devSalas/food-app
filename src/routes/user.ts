import { Router } from "express";
import  * as UserController from "../controllers/UserController";

const userRouter = Router()


userRouter.get('/roles/',UserController.getUsers);
userRouter.post('/roles/',UserController.createUser);
userRouter.get('/users/:name',UserController.findUserbyName);
userRouter.delete('/roles/',UserController.deleteUser);
userRouter.put('/roles/',UserController.updateUser);
    



export default userRouter