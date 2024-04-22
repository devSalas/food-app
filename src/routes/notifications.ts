import { Router } from "express";
import { NotificationController } from "../controllers/notifiactionsController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { clientMiddleware } from "../middlewares/clientMiddleware";

export const NotificationsRouter=Router()


NotificationsRouter 
                .get('/notifications/',authMiddleware,clientMiddleware,NotificationController.getNotifications)
                .post('/notifications/create',authMiddleware,adminMiddleware,NotificationController.createNotifications)
                .delete('/notifications/delete/:id',authMiddleware,adminMiddleware,NotificationController.deleteNotifications)
                .put('/notifications/update/:id',authMiddleware,adminMiddleware,NotificationController.updateNotifications)
                        