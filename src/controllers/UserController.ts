import type { Request, Response } from "express"
import  * as services from '../services/UserService'

export async function getUsers(req: Request, res: Response) {

    try {
        const users  = await services.getUsers()
        
        return res.status(200).json({message: "gerson junior", data:users })
    } catch (error) {
        
    }
}

export async function createUser(req: Request, res: Response) {

    const {address,email,image,name,password}=req.body

    try {
        const users  = await services.createUser({address,email,image:"",name,password})
        res.status(201).json({ message: "gerson junior created" })
    } catch (error) {
        
        res.status(400).json({ message: "msg" })
    }
    
}

export async function findUserbyId(req: Request, res: Response) {
    
    const id=2
    try{
    const user = await services.getUserbyId({id})
    
    res.status(200).json({ message: "gerson junior" ,data:user})
    } catch (error) {
        
    res.status(404).json({ message: "msg" })
    }
}
export async function findUserbyName(req: Request, res: Response) {
    
    const {name}=req.params

    try{
    const user = await services.getUserbyName({name})

    res.status(200).json({ message: "gerson junior",data:user })
    } catch (error) {
        
    res.status(404).json({ message: "msg" })
    }
}

export async function deleteUser(req: Request, res: Response) {

      
    const id=2

    try{
    const user = await services.deleteUser({id}) 

    res.status(204).json({ message: "gerson junior delete"})
    } catch (error) {
        
    res.status(404).json({ message: "msg" })
    }
}
export async function updateUser(req: Request, res: Response) {
    
    const id=2
    const {address,email,image,name,password}=req.body

    try{
    const user  = await services.updateUser({id,address,email,image,name,password})
    
    res.status(200).json({ message: "gerson junior update" })
    } catch (error) {
        
    res.status(404).json({ message: "msg" })
    }
}

