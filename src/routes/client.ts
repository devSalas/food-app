import { Router } from "express";
import { clientController } from "../controllers/ClientController";
import { validateRegister } from "../dtos/peopleDto";
import { authMiddleware } from "../middlewares/authMiddleware";

export const clientRouter = Router();

clientRouter
  .get("/clients", clientController.getClients)
  .get("/clients/:id", clientController.getClient)
  .post("/clients/create", validateRegister,clientController.createClient)
  .put("/clients/update/:id",authMiddleware, clientController.updateClient)
  .delete("/clients/delete/:id",authMiddleware, clientController.deleteClient);
