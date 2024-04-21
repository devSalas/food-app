import type { Request, Response } from "express";
import { SignInService,SignInClientService} from "../services/AuthService";
import { catchedAsync } from "../utils/catchedAsync";
import { sendJsonResponse } from "../utils/responseHttp";

export async function SingIn(req: Request, res: Response) {
  const { email, password } = req.body;

  const data = await SignInService({ email, password });

  sendJsonResponse(res, 200, data, "singin");
}
export async function SingInClient(req: Request, res: Response) {
  const { email, password } = req.body;

  const data = await SignInClientService({ email, password });

  sendJsonResponse(res, 200, data, "singin");
}

export const SignInController = {
  SignIn: catchedAsync(SingIn),
  SignInClient:catchedAsync(SingInClient)
};
