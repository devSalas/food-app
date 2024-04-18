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
exports.clientController = void 0;
const clientService = __importStar(require("../services/ClientService"));
const responseHttp_1 = require("../utils/responseHttp");
const catchedAsync_1 = require("../utils/catchedAsync");
const errors_1 = require("../utils/errors");
async function getClients(req, res) {
    const clients = await clientService.getClients();
    (0, responseHttp_1.sendJsonResponse)(res, 200, clients, "all clients");
}
async function getClient(req, res) {
    const id = req.params.id;
    if (!/^\d+$/.test(id))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = Number.parseInt(id);
    const client = await clientService.getClient(idNumber);
    if (!client)
        throw new errors_1.CustomError("esta cliente no existe", 404);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, client, "cliente con exito");
}
async function createClient(req, res) {
    const clientCreated = await clientService.createClient(req.body);
    return (0, responseHttp_1.sendJsonResponse)(res, 201, clientCreated, "created client");
}
async function updateClient(req, res) {
    const id = req.params.id;
    if (!/^\d+$/.test(id))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = Number.parseInt(id);
    const body = req.body;
    const clientUpdated = await clientService.updateClient(idNumber, body);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, clientUpdated, "update client");
}
async function deleteClient(req, res) {
    const id = req.params.id;
    if (!/^\d+$/.test(id))
        throw new errors_1.CustomError("el id tiene que ser un numero", 400);
    const idNumber = Number.parseInt(id);
    const clientDeleted = await clientService.deleteClient(idNumber);
    return (0, responseHttp_1.sendJsonResponse)(res, 200, clientDeleted, "delete client");
}
exports.clientController = {
    getClients: (0, catchedAsync_1.catchedAsync)(getClients),
    getClient: (0, catchedAsync_1.catchedAsync)(getClient),
    createClient: (0, catchedAsync_1.catchedAsync)(createClient),
    updateClient: (0, catchedAsync_1.catchedAsync)(updateClient),
    deleteClient: (0, catchedAsync_1.catchedAsync)(deleteClient),
};
