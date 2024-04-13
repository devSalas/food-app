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
exports.RolController = exports.updateRol = exports.deleteRol = exports.getRol = exports.createRol = exports.getRoles = void 0;
const services = __importStar(require("../services/RolService"));
const responseHttp_1 = require("../utils/responseHttp");
const catchedAsync_1 = require("../utils/catchedAsync");
async function getRoles(req, res) {
    const roles = await services.getRoles();
    (0, responseHttp_1.sendJsonResponse)(res, 201, roles, "roles found");
}
exports.getRoles = getRoles;
async function createRol(req, res) {
    const { name } = req.body;
    const rol = await services.createRol({ name });
    (0, responseHttp_1.sendJsonResponse)(res, 201, rol, "rol created");
}
exports.createRol = createRol;
async function getRol(req, res) {
    const { id } = req.params;
    const rolid = +id;
    const rol = await services.getRolbyId({ id: rolid });
    (0, responseHttp_1.sendJsonResponse)(res, 200, rol, "rol found");
    res.status(200).json({ message: "gerson junior", data: rol });
}
exports.getRol = getRol;
async function deleteRol(req, res) {
    const { id } = req.params;
    const rolid = +id;
    const rol = await services.deleteRol({ id: rolid });
    (0, responseHttp_1.sendJsonResponse)(res, 204, rol, "rol deleted");
}
exports.deleteRol = deleteRol;
async function updateRol(req, res) {
    const { id } = req.params;
    const rolid = +id;
    const { name } = req.body;
    const rol = await services.updateRol({ id: rolid, name });
    (0, responseHttp_1.sendJsonResponse)(res, 200, rol, "rol updated");
}
exports.updateRol = updateRol;
exports.RolController = {
    getRoles: (0, catchedAsync_1.catchedAsync)(getRoles),
    getRol: (0, catchedAsync_1.catchedAsync)(getRol),
    createRol: (0, catchedAsync_1.catchedAsync)(createRol),
    updateRol: (0, catchedAsync_1.catchedAsync)(updateRol),
    deleteRol: (0, catchedAsync_1.catchedAsync)(deleteRol)
};
