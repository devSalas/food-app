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
  .get("/users/user",authMiddleware.authMiddleware,clientMiddleware, UserController.getUser)
  .delete("/users/delete",authMiddleware.authMiddleware,clientMiddleware,UserController.deleteUser)
  .put("/users/update",authMiddleware.authMiddleware,clientMiddleware,upload.single("file"),UserController.updateUser)
  .put("/users/update/password",authMiddleware.authMiddleware,clientMiddleware,UserController.updatePassword);

export default userRouter;
