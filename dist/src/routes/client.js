"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRouter = void 0;
const express_1 = require("express");
const ClientController_1 = require("../controllers/ClientController");
exports.clientRouter = (0, express_1.Router)();
exports.clientRouter
	.get("/clients", ClientController_1.clientController.getClients)
	.get("/clients/:id", ClientController_1.clientController.getClient)
	.post("/clients/create", ClientController_1.clientController.createClient)
	.put("/clients/update/:id", ClientController_1.clientController.updateClient)
	.delete(
		"/clients/delete/:id",
		ClientController_1.clientController.deleteClient,
	);
