import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getRoles() {
    
    const users= await prisma.rol.findMany()

    return users; 
}
export async function createRol({name}:{name:string}) { 

    const isexist=await prisma.rol.findFirst({where:{name}})
    
    if (isexist?.id) throw new Error("email is already registered")

    const user=await prisma.rol.create({data:{name}})

    return user
}

export async function getRolbyName({name}:{name:string}) { 

    const user=await prisma.rol.findFirst({where:{name}})

    if (!user?.id) throw new Error("not found")

    return user 
}

export async function deleteRol({id}:{id:number}) { 

    const user=await prisma.rol.findFirst({where:{id}})

    if (!user?.id) throw new Error("not found")

    return await prisma.rol.delete({where:{id}})
}

export async function updateRol({id,name}:{id:number,name:string}) { 

    const user=await prisma.rol.findFirst({where:{id}})

    if (!user?.id) throw new Error("not found")

    return await prisma.rol.update({where:{id},data:{name}}); 
}
