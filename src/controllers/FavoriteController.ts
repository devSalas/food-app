import * as FavoriteService from "../services/FavoriteService";
import { catchedAsync } from "../utils/catchedAsync";

async function getFavoritesController() {
    const favorites=await FavoriteService.getFavorites()
    return favorites
}
async function postFavoritesController() {
    const favorites=await FavoriteService.getFavorites()
    return favorites
}
async function deleteFavoritesController() {
    const favorites=await FavoriteService.getFavorites()
    return favorites
}


export const FavoriteController={
    getController:catchedAsync(getFavoritesController),
    postController:catchedAsync(postFavoritesController),
    deleteController:catchedAsync(deleteFavoritesController)
}