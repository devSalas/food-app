import type { Request, Response } from "express";

import * as services from "../services/UserService";
<<<<<<< HEAD
import { sendJsonResponse } from "../utils/responseHttp";
import { catchedAsync } from "../utils/catchedAsync";

export async function getUsers(req: Request, res: Response) {
	const users = await services.getUsers();
	sendJsonResponse(res, 200, users, "all users");
}

export async function createUser(req: Request, res: Response) {
	const { address, email, image, name, password } = req.body;

	const users = await services.createUser({
		address,
		email,
		image: "",
		name,
		password,
	});
	sendJsonResponse(res, 201, users, "user created");
}

export async function getUser(req: Request, res: Response) {
	const { id } = req.params;
	const userid = +id;

	const user = await services.getUserbyId({ id: userid });
	sendJsonResponse(res, 201, user, "user found");
=======
import { catchedAsync } from "../utils/catchedAsync";
import { sendJsonResponse } from "../utils/responseHttp";

export async function getUsers(req: Request, res: Response) {
  const users = await services.getUsers();
  sendJsonResponse(res, 200, users, "all users");
}

export async function createUser(req: Request, res: Response) {
  const { address, email, image, name, password } = req.body;

  const users = await services.createUser({
    address,
    email,
    image: "",
    name,
    password,
  });
  sendJsonResponse(res, 201, users, "user created");
}

export async function getUser(req: Request, res: Response) {
  const { id } = req.params;
  const userid = +id;

  const user = await services.getUserbyId({ id: userid });
  sendJsonResponse(res, 201, user, "user found");
>>>>>>> 4287029b7c636487dea716fd640b5240932dae4b
}
export async function findUserbyName(req: Request, res: Response) {
  const { name } = req.params;

<<<<<<< HEAD
	const user = await services.getUserbyName({ name });

	res.status(200).json({ message: "gerson junior", data: user });
}

export async function deleteUser(req: Request, res: Response) {
	const { id } = req.params;
	const userid = +id;
	const user = await services.deleteUser({ id: userid });

	sendJsonResponse(res, 204, user, "user deleted");
}
export async function updateUser(req: Request, res: Response) {
	const { id } = req.params;
	const userid = +id;
	const { address, email, image, name, password } = req.body;

	const user = await services.updateUser({
		id: userid,
		address,
		email,
		image,
		name,
		password,
	});

	sendJsonResponse(res, 200, user, "user updated");
}

export const UserController = {
	getUsers: catchedAsync(getUsers),
	getUser: catchedAsync(getUser),
	createUser: catchedAsync(createUser),
	updateUser: catchedAsync(updateUser),
	deleteUser: catchedAsync(deleteUser),
=======
  const user = await services.getUserbyName({ name });

  res.status(200).json({ message: "gerson junior", data: user });
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const userid = +id;
  const user = await services.deleteUser({ id: userid });

  sendJsonResponse(res, 204, user, "user deleted");
}
export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const userid = +id;
  const { address, email, image, name, password } = req.body;

  const user = await services.updateUser({
    id: userid,
    address,
    email,
    image,
    name,
    password,
  });

  sendJsonResponse(res, 200, user, "user updated");
}

export const UserController = {
  getUsers: catchedAsync(getUsers),
  getUser: catchedAsync(getUser),
  createUser: catchedAsync(createUser),
  updateUser: catchedAsync(updateUser),
  deleteUser: catchedAsync(deleteUser),
>>>>>>> 4287029b7c636487dea716fd640b5240932dae4b
};
