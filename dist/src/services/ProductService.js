"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getProducts() {
    const products = await prisma.product.findMany();
    return products;
}
exports.getProducts = getProducts;
async function getProduct(id) {
    const newProduct = await prisma.product.findFirst({
        where: {
            id,
        },
    });
    return newProduct;
}
exports.getProduct = getProduct;
async function createProduct(Product) {
    const ProductCreated = await prisma.product.create({ data: Product });
    return ProductCreated;
}
exports.createProduct = createProduct;
async function updateProduct(id, Product) {
    const ProductUpdated = await prisma.product.update({
        where: { id: id },
        data: { ...Product },
    });
    return ProductUpdated;
}
exports.updateProduct = updateProduct;
async function deleteProduct(id) {
    const ProductDeleted = await prisma.product.delete({
        where: { id: id },
    });
    return ProductDeleted;
}
exports.deleteProduct = deleteProduct;
