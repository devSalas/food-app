import type { Request, Response } from "express";
import * as NotificationServices from "../services/notifications";
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";

async function getNotifications(req:Request,res:Response) {
    const {id}=req.params
    const notificatiosn=await NotificationServices.getNotifications({id:+id})
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}
async function createNotifications(req:Request,res:Response) {
    const {description,title}=req.body
    const notificatiosn=await NotificationServices.postNotifications({description,title})
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}
async function deleteNotifications(req:Request,res:Response) {

    const {id}=req.params
    const notificatiosn=await NotificationServices.deleteNotifications(+id)
    sendJsonResponse(res,200,notificatiosn,"notifications found")
}
async function udpateNotifications(req:Request,res:Response) {
    const {id}=req.params
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