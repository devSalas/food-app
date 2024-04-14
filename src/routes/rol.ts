import { Router } from "express";
import { RolController } from "../controllers/RolController";

const rolRouter = Router();

rolRouter
  .get("/roles/:id", RolController.getRoles)
  .post("/roles/create", RolController.createRol)
  .get("/roles/:id", RolController.getRol)
  .delete("/roles/:id", RolController.deleteRol)
  .put("/roles/:id", RolController.updateRol);

export default rolRouter;
