import { CustomError } from "../utils/errors";
import prisma from "../utils/prismaClient";


export async function getFavorites({user_id}:{user_id:number}) {
    
    const favorite=await prisma.favorite.findMany({where:{user_id},select:{user_id:false,user:false,id:false,product_id:false,product:true}})

    return favorite.map(e=>({...e.product}))
}
export async function postFavorite({user_id,product_id}:{product_id:number,user_id:number}) {
    
    const exist=await prisma.favorite.findFirst({where:{AND:{user_id,product_id}}})

    if (exist?.id) throw new CustomError("you dont add the same favorite",404);

    const favorite=await prisma.favorite.create({data:{user_id,product_id}})

    return favorite
}
export async function deleteFavorite({user_id,product_id}:{product_id:number,user_id:number}) {
    
    const exist=await prisma.favorite.findFirst({where:{AND:{user_id,product_id}}})

    if (!exist?.id) throw new CustomError("Favorite not found",404);
    
    const favorite=await prisma.favorite.delete({where:{id:exist.id}})

    return favorite 
}