import type { Category } from "../schemas/category";
import { CustomError } from "../utils/errors";
import prisma from "../utils/prismaClient";

export async function getCategories() {
  const categories = await prisma.category.findMany();
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

export async function createCategory(data: Category) {
  const categoryFound = await prisma.category.findFirst({
    where: { name: data.name },
  });

  if (categoryFound !== null)
    throw new CustomError("Esta categoria ya existe", 400);

  const category = await prisma.category.create({ data });
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
