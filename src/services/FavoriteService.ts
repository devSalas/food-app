import { CustomError } from "../utils/errors";
import prisma from "../utils/prismaClient";


export async function getFavorites({client_id}:{client_id:number}) {
    
    const favorite=await prisma.favorite.findMany({where:{client_id}})

    return favorite
}
export async function postFavorite({client_id,product_id}:{product_id:number,client_id:number}) {
    
    const exist=await prisma.favorite.findFirst({where:{AND:{client_id,product_id}}})

    if (exist?.id) throw new CustomError("you dont add the same favorite",404);

    const favorite=await prisma.favorite.create({data:{client_id,product_id}})

    return favorite
}
export async function deleteFavorite({client_id,product_id}:{product_id:number,client_id:number}) {
    
    const exist=await prisma.favorite.findFirst({where:{AND:{client_id,product_id}}})

    if (!exist?.id) throw new CustomError("Favorite not found",404);
    
    const favorite=await prisma.favorite.delete({where:{id:exist.id}})

    return favorite 
}