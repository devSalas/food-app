import { Request, Response } from "express"
import  * as services from '../services/UserService'

export async function getUsers(req: Request, res: Response) {

    const users  = await services.getUsers()

    return res.json({ 'message': "gerson junior", data:users })
}

export function getUser(req: Request, res: Response) {

    res.json({ 'message': "gerson junior" })
}

export function createUser(req: Request, res: Response) {

    res.json({ 'message': "gerson junior" })
}


