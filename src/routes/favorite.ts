import { Router } from "express";
import {  FavoriteController} from "../controllers/FavoriteController";

export const favoriteRoute = Router();

favoriteRoute
  .get("/favorites/",FavoriteController.getController)
  .post("/favorites/create",FavoriteController.postController)
  .delete("/favorites/delete",FavoriteController.deleteController);
