import type { Product } from "../schemas/product";
import prisma from "../utils/prismaClient";

export async function getProducts(name:string,price:number) {
  const products = await prisma.product.findMany({where:{name:{startsWith:name},price:{gte:price}}});
  return products;
}

export async function getProduct(id: number) {
  const productFound = await prisma.product.findFirst({
    where: {
      id,
    },
  });
  return productFound;
}

export async function createProduct(data: Product) {
  const productCreated = await prisma.product.create({ data });
  return productCreated;
}

export async function updateProduct(id: number, data: Partial<Product>) {
  const productUpdated = await prisma.product.update({
    where: { id },
    data,
  });
  return productUpdated;
}

export async function deleteProduct(id: number) {
  const productDeleted = await prisma.product.delete({
    where: { id: id },
  });
  return productDeleted;
}
