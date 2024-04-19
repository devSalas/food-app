import { Router } from "express";
import { RolController } from "../controllers/RolController";
import { validateRol } from "../dtos/rol";

const rolRouter = Router();

rolRouter
  .get("/roles/:id", RolController.getRoles)
  .post("/roles/create", validateRol,RolController.createRol)
  .get("/roles/:id", RolController.getRol)
  .delete("/roles/:id", RolController.deleteRol)
  .put("/roles/:id", RolController.updateRol);

export default rolRouter;
