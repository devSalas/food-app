import type { Category } from "../schemas/category";
import type { CategoryI } from "../types/category";
import { UploadImage } from "../utils/cloudinary/UploadImage";
import { CustomError } from "../utils/errors";
import prisma from "../utils/prismaClient";

export async function getCategories(){
  const categories = await prisma.category.findMany()
  console.log("las cateogrias")
  return categories;
}

export async function getCategory(id: number) {
 
  const category = await prisma.category.findFirst({
    where: {
      id,
    },
  });
  return category;
}

export async function createCategory({data}:{data: CategoryI}) {

  
  const categoryFound = await prisma.category.findFirst({
    where: { name: data.name },
  });

  if (categoryFound !== null)
    throw new CustomError("Esta categoria ya existe", 400);

  let image:any
  if (data.image instanceof Buffer && data.image) {
    image=await UploadImage({buffer:data.image,pathName:"categories"})
    if (!image) throw new Error("Error image")
  }


  const category = await prisma.category.create({  data:{...data,image:image?image:data.image} });
  return category;
}

export async function updateCategory(id: number, data: Partial<Category>) {
  const category = await prisma.category.update({
    where: { id },
    data,
  });
  return category;
}

export async function deleteCategory(id: number) {
  const category = await prisma.category.delete({
    where: { id },
  });
  return category;
}
