import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { clientMiddleware } from "../middlewares/clientMiddleware";
import { UserNotificationController } from "../controllers/userNotification";

export const UserNotificationsRouter=Router()


UserNotificationsRouter 
                .put('/userNotifications/update/:notificationid',authMiddleware,clientMiddleware,UserNotificationController.updateUserNotifaciton)