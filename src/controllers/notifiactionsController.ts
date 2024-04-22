import type { Request, Response } from "express";
import * as NotificationServices from "../services/notifications";
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";
import type { CustomRequest } from "../types/CustomRequest";

async function getNotifications(req:CustomRequest,res:Response) {
    if (req.id===undefined) return
    const {id}=req
    const notificatiosn=await NotificationServices.getNotifications({id:+id})
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}
async function createNotifications(req:Request,res:Response) {
    const {description,title}=req.body
    const notificatiosn=await NotificationServices.postNotifications({description,title})
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}
async function deleteNotifications(req:CustomRequest,res:Response) {
    if (req.id===undefined) return
    const {id}=req
    const notificatiosn=await NotificationServices.deleteNotifications(+id)
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}
async function udpateNotifications(req:CustomRequest,res:Response) {
    if (req.id===undefined) return
    const {id}=req
    const {description,title}=req.body
    const notificatiosn=await NotificationServices.updateNotifications({id:+id,description,title})
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}

export const NotificationController={
    getNotifications:catchedAsync(getNotifications),
    createNotifications:catchedAsync(createNotifications),
    deleteNotifications:catchedAsync(deleteNotifications),
    updateNotifications:catchedAsync(udpateNotifications),
}