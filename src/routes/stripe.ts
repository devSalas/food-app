import express from "express";
import { PaymentController } from "../controllers/PaymentController";

export const stripeRouter =express.Router()


stripeRouter
    .post("/web-hook-payment",express.raw({type: 'application/json'}),PaymentController.webHookPayment)