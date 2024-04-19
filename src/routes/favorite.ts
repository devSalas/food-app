import { Router } from "express";
import {  FavoriteController} from "../controllers/FavoriteController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const favoriteRoute = Router();

favoriteRoute
  .get("/favorites/:id",authMiddleware,FavoriteController.getController)
  .post("/favorites/:id/create/:productid",authMiddleware,FavoriteController.postController)
  .delete("/favorites/:id/delete/:productid",authMiddleware,FavoriteController.deleteController);
