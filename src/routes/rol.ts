import { Router } from "express";
import { RolController } from "../controllers/RolController";
import { validateRol } from "../dtos/rol";
import { authMiddleware } from "../middlewares/authMiddleware";

const rolRouter = Router();

rolRouter
  .get("/roles/", RolController.getRoles)
  .post("/roles/create", validateRol,RolController.createRol)
  .get("/roles/:id", RolController.getRol)
  .delete("/roles/delete/:id",authMiddleware, RolController.deleteRol)
  .put("/roles/update/:id",authMiddleware, RolController.updateRol);

export default rolRouter;
