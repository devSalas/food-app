import { Router } from "express";
import { NotificationController } from "../controllers/notifiactionsController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const NotificationsRouter=Router()


NotificationsRouter 
                .get('/notifications/',authMiddleware,NotificationController.getNotifications)
                .post('/notifications/create',authMiddleware,NotificationController.createNotifications)
                .delete('/notifications/delete/:id',authMiddleware,NotificationController.deleteNotifications)
                .put('/notifications/update/:id',authMiddleware,NotificationController.updateNotifications)
                        