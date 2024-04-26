import type { Request, Response } from "express";
import { validateCategory, validateCategoryPartial } from "../schemas/category";
import * as CategoryService from "../services/CategoryService";
import { catchedAsync } from "../utils/catchedAsync";
import { CustomError } from "../utils/errors";
import { sendJsonResponse } from "../utils/responseHttp";
import { verificarId } from "../utils/verificarId";

async function getCategories(_req: Request, res: Response) {
  const categories = await CategoryService.getCategories();

  sendJsonResponse(res, 200, categories, "Todas la categorias");
}

async function getCategory(req: Request, res: Response) {
  const id = verificarId(req.params.id);

  const category = await CategoryService.getCategory(id);

  if (!category) throw new CustomError("Categoria no encotrada", 404);

  return sendJsonResponse(res, 200, category, "Categoria encotrada");
}

async function createCategory(req: Request, res: Response) {
  const result = validateCategory(req.body);
  const file=req.file
  const image=file?.buffer?file.buffer:req.file

  if (result.success) {
    const category = await CategoryService.createCategory({data:{...result.data,image}});
    return sendJsonResponse(res, 201, category, "Categoria Creada");
  }

  throw new CustomError("Error al crear una categoria", 404);
}

async function updateCategory(req: Request, res: Response) {
  const id = verificarId(req.params.id);

  const result = validateCategoryPartial(req.body);

  if (result.success) {
    const category = await CategoryService.updateCategory(id, result.data);
    return sendJsonResponse(res, 200, category, "Categoria actualizada");
  }
  throw new CustomError("Error al actualizar una categoria", 404);
}
async function deleteCategory(req: Request, res: Response) {
  const id = verificarId(req.params.id);

  const category = await CategoryService.deleteCategory(id);
  return sendJsonResponse(res, 200, category, "Categoria eliminada");
}

export const CategoryController = {
  getCategories: catchedAsync(getCategories),
  getCategory: catchedAsync(getCategory),
  createCategory: catchedAsync(createCategory),
  updateCategory: catchedAsync(updateCategory),
  deleteCategory: catchedAsync(deleteCategory),
};
