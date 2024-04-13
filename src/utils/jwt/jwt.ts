import jwt from "jsonwebtoken";

export async function jwtSign({id}:{id:number}) {
    
    const token = await jwt.sign({id},process.env.SECRET_JWT||"aaa",{algorithm:"HS256",expiresIn:"24h"})
    return token
}

export async function jwtDecode({token}:{token:string}) {
    
    const payload = await jwt.verify(token,process.env.SECRET_JWT||"aaa")

    return payload
}