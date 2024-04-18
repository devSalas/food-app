"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const client_1 = require("@prisma/client");
const errors_1 = require("../utils/errors");
const prisma = new client_1.PrismaClient();
async function getCategories() {
    const categories = await prisma.category.findMany();
    return categories;
}
exports.getCategories = getCategories;
async function getCategory(id) {
    const newCategory = await prisma.category.findFirst({
        where: {
            id,
        },
    });
    return newCategory;
}
exports.getCategory = getCategory;
/* crear categoria */
async function createCategory(category) {
    const newName = category.name;
    const getNewName = await prisma.category.findFirst({
        where: { name: newName },
    });
    if (getNewName !== null)
        throw new errors_1.CustomError("Esta categoria ya existe", 400);
    const categoryCreated = await prisma.category.create({ data: category });
    return categoryCreated;
}
exports.createCategory = createCategory;
async function updateCategory(id, category) {
    const categoryUpdated = await prisma.category.update({
        where: { id: id },
        data: { ...category },
    });
    return categoryUpdated;
}
exports.updateCategory = updateCategory;
async function deleteCategory(id) {
    const categoryDeleted = await prisma.category.delete({
        where: { id: id },
    });
    return categoryDeleted;
}
exports.deleteCategory = deleteCategory;
