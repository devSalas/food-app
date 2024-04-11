<<<<<<< HEAD
import { Request, Response } from "express";

import * as services from "../services/UserService";
=======
import  type { Request, Response } from "express"

import  * as services from '../services/UserService'
import { sendJsonResponse } from "../utils/responseHttp"
import { catchedAsync } from "../utils/catchedAsync"
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

export async function getUsers(req: Request, res: Response) {
	try {
		const users = await services.getUsers();

<<<<<<< HEAD
		return res.status(200).json({ message: "gerson junior", data: users });
	} catch (error) {}
=======
        const users  = await services.getUsers()
        sendJsonResponse(res,200,users,"all users")

>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}

export async function createUser(req: Request, res: Response) {
	const { address, email, image, name, password } = req.body;

<<<<<<< HEAD
	try {
		const users = await services.createUser({
			address,
			email,
			image: "",
			name,
			password,
		});
		res.status(201).json({ message: "gerson junior created" });
	} catch (error) {
		res.status(400).json({ message: "msg" });
	}
}

export async function findUserbyId(req: Request, res: Response) {
	const id = 2;
	try {
		const user = await services.getUserbyId({ id });

		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
=======
    const {address,email,image,name,password}=req.body

 
        const users  = await services.createUser({address,email,image:"",name,password})
        sendJsonResponse(res,201,users,"user created")
    
}

export async function findUserbyId(req: Request, res: Response) {
    
    const id=2

    const user = await services.getUserbyId({id})
    sendJsonResponse(res,201,user,"user found")

>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}
export async function findUserbyName(req: Request, res: Response) {
	const { name } = req.params;

<<<<<<< HEAD
	try {
		const user = await services.getUserbyName({ name });

		res.status(200).json({ message: "gerson junior", data: user });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
=======
    const user = await services.getUserbyName({name})

    res.status(200).json({ message: "gerson junior",data:user })

>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}

export async function deleteUser(req: Request, res: Response) {
	const id = 2;

	try {
		const user = await services.deleteUser({ id });

<<<<<<< HEAD
		res.status(204).json({ message: "gerson junior delete" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
=======
    
    const user = await services.deleteUser({id}) 

    sendJsonResponse(res,204,user,"user deleted")

>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
}
export async function updateUser(req: Request, res: Response) {
	const id = 2;
	const { address, email, image, name, password } = req.body;

<<<<<<< HEAD
	try {
		const user = await services.updateUser({
			id,
			address,
			email,
			image,
			name,
			password,
		});

		res.status(200).json({ message: "gerson junior update" });
	} catch (error) {
		res.status(404).json({ message: "msg" });
	}
}
=======

    const user  = await services.updateUser({id,address,email,image,name,password})
    
    sendJsonResponse(res,200,user,"user updated")

}


export const UserController = {
    getUsers: catchedAsync(getUsers),
    getUser: catchedAsync(findUserbyName),
    createUser:catchedAsync(createUser),
    updateUser:catchedAsync(updateUser),
    deleteUser:catchedAsync(deleteUser)
}
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62
