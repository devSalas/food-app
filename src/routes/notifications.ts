import { Router } from "express";
import { NotificationController } from "../controllers/notifiactionsController";

export const NotificationsRouter=Router()


NotificationsRouter 
                .get('/notifications',NotificationController.getNotifications)
                .post('/notifications/create',NotificationController.createNotifications)
                .delete('/notifications/delete/:id',NotificationController.deleteNotifications)
                .put('/notifications/update/:id',NotificationController.updateNotifications)
                        