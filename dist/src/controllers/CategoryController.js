"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const CategoryService = __importStar(require("../services/CategoryService"));
const responseHttp_1 = require("../utils/responseHttp");
const catchedAsync_1 = require("../utils/catchedAsync");
const errors_1 = require("../utils/errors");
async function getCategories(req, res) {
    const categories = await CategoryService.getCategories();
    (0, responseHttp_1.sendJsonResponse)(res, 400, categories, "all categories");
}
async function getCategory(req, res) {
    const id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const category = await CategoryService.getCategory(+id);
    if (!category)
        throw new errors_1.CustomError("esta categoria no existe", 404);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, category, "categoria con exito");
}
async function createCategory(req, res) {
    const categoryCreated = await CategoryService.createCategory(req.body);
    return (0, responseHttp_1.sendJsonResponse)(res, 201, categoryCreated, 'created category');
}
async function updateCategory(req, res) {
    const id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = parseInt(id);
    const body = req.body;
    const categoryUpdated = await CategoryService.updateCategory(idNumber, body);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, categoryUpdated, "update category");
}
async function deleteCategory(req, res) {
    let id = req.params.id;
    if (!(/^\d+$/.test(id)))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = parseInt(id);
    const categoryDeleted = await CategoryService.deleteCategory(idNumber);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, categoryDeleted, "delete category");
}
exports.CategoryController = {
    getCategories: (0, catchedAsync_1.catchedAsync)(getCategories),
    getCategory: (0, catchedAsync_1.catchedAsync)(getCategory),
    createCategory: (0, catchedAsync_1.catchedAsync)(createCategory),
    updateCategory: (0, catchedAsync_1.catchedAsync)(updateCategory),
    deleteCategory: (0, catchedAsync_1.catchedAsync)(deleteCategory)
};
