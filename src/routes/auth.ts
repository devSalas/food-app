import { Router } from "express";
import { SignInController } from "../controllers/authController";

export const authRoute = Router();

authRoute.post("/signin", SignInController.SignIn);

authRoute.post("/signinclient",SignInController.SignInClient)