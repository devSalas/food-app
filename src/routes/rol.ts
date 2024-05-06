import { Router } from "express";
import { RolController } from "../controllers/RolController";
import { validateRol } from "../dtos/rol";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const rolRouter = Router();

rolRouter
  .get("/roles/", RolController.getRoles)
  .post("/roles/create",authMiddleware.authMiddleware,adminMiddleware,validateRol,RolController.createRol)
  .get("/roles/:id",RolController.getRol)
  .delete("/roles/delete/:id",authMiddleware.authMiddleware,adminMiddleware, RolController.deleteRol)
  .put("/roles/update/:id",authMiddleware.authMiddleware,adminMiddleware, RolController.updateRol);

export default rolRouter;
