import { Router } from "express";
import  {UserController} from "../controllers/UserController";


const userRouter = Router();

userRouter
        .get('/users/',UserController.getUsers)
        .post('/users/create',UserController.createUser)
        .get('/users/:id',UserController.getUser)
        .delete('/users/:id',UserController.deleteUser)
        .put('/users/:id',UserController.updateUser);
    

export default userRouter;
