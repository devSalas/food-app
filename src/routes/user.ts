import { Router } from "express";
<<<<<<< HEAD
import * as UserController from "../controllers/UserController";
=======
import  {UserController} from "../controllers/UserController";

const userRouter = Router()
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

const userRouter = Router();

userRouter
<<<<<<< HEAD
	.get("/users", UserController.getUsers)
	.post("/users", UserController.createUser)
	.get("/users/:name", UserController.findUserbyName)
	.delete("/users/", UserController.deleteUser)
	.put("/users/", UserController.updateUser);
=======
        .get('/users/',UserController.getUsers)
        .post('/users/',UserController.createUser)
        .get('/users/:name',UserController.getUser)
        .delete('/users/',UserController.deleteUser)
        .put('/users/',UserController.updateUser);
    
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

export default userRouter;
