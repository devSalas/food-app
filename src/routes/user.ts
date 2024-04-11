import { Router } from "express";
import  {UserController} from "../controllers/UserController";

const userRouter = Router()


userRouter
        .get('/users/',UserController.getUsers)
        .post('/users/',UserController.createUser)
        .get('/users/:name',UserController.getUser)
        .delete('/users/',UserController.deleteUser)
        .put('/users/',UserController.updateUser);
    



export default userRouter