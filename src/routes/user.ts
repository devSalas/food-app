import { Router } from "express";
import { UserController } from "../controllers/UserController";
import multer from "multer";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validateRegister } from "../dtos/peopleDto";

const upload = multer({storage:multer.memoryStorage()})
const userRouter = Router();

userRouter
  .get("/users/", UserController.getUsers)
  .post("/users/create",validateRegister,UserController.createUser)
  .get("/users/user",authMiddleware, UserController.getUser)
  .delete("/users/delete",authMiddleware,UserController.deleteUser)
  .put("/users/update",authMiddleware,upload.single("file"),UserController.updateUser)
  .put("/users/update/password",authMiddleware,UserController.updatePassword);

export default userRouter;
