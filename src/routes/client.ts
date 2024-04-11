import { Router } from "express";
import { clientController } from "../controllers/ClientController";

export const clientRouter = Router();

clientRouter
	.get("/clients", clientController.getClients)
	.get("/clients/:id", clientController.getClient)
	.post("/clients/create", clientController.createClient)
	.put("/clients/update/:id", clientController.updateClient)
	.delete("/clients/delete/:id", clientController.deleteClient);
