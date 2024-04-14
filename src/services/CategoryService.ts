import { PrismaClient } from "@prisma/client";
import type { Category } from "../types/category";
import { CustomError } from "../utils/errors";

const prisma = new PrismaClient();

export async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}
export async function getCategory(id: number) {
  const newCategory = await prisma.category.findFirst({
    where: {
      id,
    },
  });
  return newCategory;
}
/* crear categoria */
export async function createCategory(category: Category) {
  const newName = category.name;

  const getNewName = await prisma.category.findFirst({
    where: { name: newName },
  });

  if (getNewName !== null)
    throw new CustomError("Esta categoria ya existe", 400);

  const categoryCreated = await prisma.category.create({ data: category });
  return categoryCreated;
}

export async function updateCategory(id: number, category: Category) {
  const categoryUpdated = await prisma.category.update({
    where: { id: id },
    data: { ...category },
  });
  return categoryUpdated;
}
export async function deleteCategory(id: number) {
  const categoryDeleted = await prisma.category.delete({
    where: { id: id },
  });
  return categoryDeleted;
}
