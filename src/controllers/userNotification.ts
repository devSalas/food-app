import type { Response } from "express";
import type { CustomRequest } from "../types/CustomRequest";
import * as NotificationService from "../services/useNotification";
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";

async function updateUserNotificaitonCOntroller(req:CustomRequest,res:Response){

    if (req.id===undefined) return
    const {id}=req
    const {notificationid}=req.params
    const notification_id=+notificationid
    
    const notification=await NotificationService.updateUserNotification({id,notification_id})
    sendJsonResponse(res,200,notification,'notification seen')
}

export const UserNotificationController={
    updateUserNotifaciton:catchedAsync(updateUserNotificaitonCOntroller)
}