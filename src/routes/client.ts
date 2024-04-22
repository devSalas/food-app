import { Router } from "express";
import { clientController } from "../controllers/ClientController";
import { validateRegister } from "../dtos/peopleDto";
import { authMiddleware } from "../middlewares/authMiddleware";
import { clientMiddleware } from "../middlewares/clientMiddleware";

export const clientRouter = Router();

clientRouter
  .get("/clients", clientController.getClients)
  .get("/clients/:id", clientController.getClient)
  .post("/clients/create", validateRegister,clientMiddleware,clientController.createClient)
  .put("/clients/update/:id",authMiddleware,clientMiddleware, clientController.updateClient)
  .delete("/clients/delete/:id",authMiddleware,clientMiddleware, clientController.deleteClient);
