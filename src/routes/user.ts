import { Router } from "express";
import { UserController } from "../controllers/UserController";
import multer from "multer";
import { authMiddleware } from "../middlewares/authMiddleware";

const upload = multer({storage:multer.memoryStorage()})
const userRouter = Router();

userRouter
  .get("/users/", UserController.getUsers)
  .post("/users/create", UserController.createUser)
  .get("/users/:id", UserController.getUser)
  .delete("/users/:id", UserController.deleteUser)
  .put("/users/:id",authMiddleware,upload.single("file") ,UserController.updateUser)
  .put("/users/password/:id",authMiddleware,UserController.updatePassword);

export default userRouter;
