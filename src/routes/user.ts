import { Router } from "express";
import { UserController } from "../controllers/UserController";
import multer from "multer";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validateRegister } from "../dtos/peopleDto";
import { clientMiddleware } from "../middlewares/clientMiddleware";

const upload = multer({storage:multer.memoryStorage()})
const userRouter = Router();

userRouter
  .get("/users/", UserController.getUsers)
  .post("/users/create",validateRegister,UserController.createUser)
  .get("/users/user",authMiddleware,clientMiddleware, UserController.getUser)
  .delete("/users/delete",authMiddleware,clientMiddleware,UserController.deleteUser)
  .put("/users/update",authMiddleware,clientMiddleware,upload.single("file"),UserController.updateUser)
  .put("/users/update/password",authMiddleware,clientMiddleware,UserController.updatePassword);

export default userRouter;
