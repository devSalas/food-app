import { PrismaClient } from "@prisma/client";
import { CustomError } from "../utils/errors";
import { decodePassword } from "../utils/bcrypt/EncryptPassword";
import { jwtSign } from "../utils/jwt/jwt";

const prisma = new PrismaClient()

export async function SignInService({email,password}:{email:string,password:string}) {

    const userExist=await prisma.user.findFirst({where:{email}})
    
    if (userExist == null) throw new CustomError("Email or password not exist",401);
    
    const passwordVerify= await decodePassword({password,passwordEncripted:userExist.password})

    if (!passwordVerify) throw new CustomError("Email or paswrod not exist",401);
 
    const token = await jwtSign({id:userExist.id})


    return {token,id:userExist.id}
}