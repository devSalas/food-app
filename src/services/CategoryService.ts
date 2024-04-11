import { PrismaClient } from "@prisma/client";
import { Category } from "../types/category";

const prisma = new PrismaClient();

export async function getCategories() {
   const categories =await prisma.category.findMany()
   return categories
}
export async function getCategory(id:number) {
    const newCategory = await prisma.category.findFirst({
        where:{
            id
        }
    })
    return newCategory
}
export async function createCategory(category:Category) {

    const categoryCreated = await prisma.category.create({data:category})
    return categoryCreated
}

export async function updateCategory(id:number,category:Category) {
    const  categoryUpdated  = await prisma.category.update({
        where:{id:id},
        data:{ ...category}
    })
    return categoryUpdated;
}
export async function deleteCategory(id:number) {
    const categoryDeleted  = await prisma.category.delete({
        where:{id:id}
    })
    return categoryDeleted;
}
