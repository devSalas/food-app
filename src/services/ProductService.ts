import { PrismaClient } from "@prisma/client";
import { Product } from "../types/product";

const prisma = new PrismaClient();

export async function getProducts() {
   const products =await prisma.product.findMany()
   return products
}
export async function getProduct(id:number) {
    const newProduct = await prisma.product.findFirst({
        where:{
            id
        }
    })
    return newProduct
}
export async function createProduct(Product:Product) {

    const ProductCreated = await prisma.product.create({data:Product})
    return ProductCreated
}

export async function updateProduct(id:number,Product:Product) {
    const  ProductUpdated  = await prisma.product.update({
        where:{id:id},
        data:{ ...Product}
    })
    return ProductUpdated;
}
export async function deleteProduct(id:number) {
    const ProductDeleted  = await prisma.product.delete({
        where:{id:id}
    })
    return ProductDeleted;
}
