import { Router } from "express";
import {  FavoriteController} from "../controllers/FavoriteController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { clientMiddleware } from "../middlewares/clientMiddleware";

export const favoriteRoute = Router();

favoriteRoute
  .get("/favorites/",authMiddleware,clientMiddleware,FavoriteController.getController)
  .post("/favorites/create/:productid",authMiddleware,clientMiddleware,FavoriteController.postController)
  .delete("/favorites/delete/:productid",authMiddleware,clientMiddleware,FavoriteController.deleteController);
