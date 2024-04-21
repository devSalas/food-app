import type { Request, Response } from "express";
import * as FavoriteService from "../services/FavoriteService";
import { catchedAsync } from "../utils/catchedAsync";
import { sendJsonResponse } from "../utils/responseHttp";
import type{ CustomRequest } from "../types/CustomRequest";

async function getFavoritesController(req:Request,res:Response) {

    const {id}=req.params
    const client_id=+id

    const favorites=await FavoriteService.getFavorites({client_id})
    sendJsonResponse(res, 200, favorites, "all favorites");
}
async function postFavoritesController(req:CustomRequest,res:Response) {
    if(req.id === undefined) return
    const {id}=req
    const {productid}=req.params
    const product_id=+productid


    const favorites=await FavoriteService.postFavorite({client_id:id,product_id})
    sendJsonResponse(res, 201, favorites, "favorites craete");
}
async function deleteFavoritesController(req:CustomRequest,res:Response) {
    if(req.id === undefined) return
    const {id}=req
    const {productid}=req.params
    const product_id=+productid

    const favorites=await FavoriteService.deleteFavorite({client_id:id,product_id})
    sendJsonResponse(res, 204, favorites, "favorite delete");
}


export const FavoriteController={
    getController:catchedAsync(getFavoritesController),
    postController:catchedAsync(postFavoritesController),
    deleteController:catchedAsync(deleteFavoritesController)
}