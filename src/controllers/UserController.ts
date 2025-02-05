import type { Request, Response } from "express";

import * as services from "../services/UserService";
import { catchedAsync } from "../utils/catchedAsync";
import { sendJsonResponse } from "../utils/responseHttp";
import type{ CustomRequest } from "../types/CustomRequest";

export async function getUsers(req: Request, res: Response) {
  const users = await services.getUsers();
  sendJsonResponse(res, 200, users, "all users");
}

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const users = await services.createUser({
    email,
    password,
  });

  sendJsonResponse(res, 201, users, "user created");
}

export async function getUser(req: CustomRequest, res: Response) {
  if(req.id === undefined) return
  const { id } = req;

  const user = await services.getUserbyId({ id });
  sendJsonResponse(res, 201, user, "user found");
}
export async function findUserbyName(req: Request, res: Response) {
  const { name } = req.params;

  const user = await services.getUserbyName({ name });

  res.status(200).json({ message: "gerson junior", data: user });
}

export async function deleteUser(req: CustomRequest, res: Response) {
  if(req.id === undefined) return
  const { id } = req;
  const userid = +id;
  const user = await services.deleteUser({ id: userid });

  sendJsonResponse(res, 204, user, "user deleted");
}
export async function updateUser(req: CustomRequest, res: Response) {

  if(req.id === undefined) return
  const {id}=req
  const {name} = req.body;
  const file=req.file
  const image =file?.buffer?file.buffer:req.file
  
  const user = await services.updateUser({
    id,
    buffer:image,
    name,
  });
  req.file = undefined;
  sendJsonResponse(res, 200, user, "user updated");
}

export async function udpatePassword(req:CustomRequest,res:Response) {
  if(req.id === undefined) return
  const {id}=req
  const {oldPassword,newPassword} = req.body;
  

  const user= await services.updatePassword({id,oldPassword,newPassword})
  sendJsonResponse(res, 200, user, "user updated");
}

export const UserController = {
  getUsers: catchedAsync(getUsers),
  getUser: catchedAsync(getUser),
  createUser: catchedAsync(createUser),
  updateUser: catchedAsync(updateUser),
  deleteUser: catchedAsync(deleteUser),
  updatePassword: catchedAsync(udpatePassword),
};




