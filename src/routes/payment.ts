import { Router } from "express"
import { PaymentController } from "../controllers/PaymentController"

export const paymentRouter =  Router()

paymentRouter
    .post("/payment-intent",PaymentController.postPagePayment)
    