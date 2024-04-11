import { Router } from "express";
<<<<<<< HEAD
import * as RolController from "../controllers/RolController";
=======
import   {RolController} from "../controllers/RolController";

const rolRouter = Router()
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

const rolRouter = Router();

rolRouter
<<<<<<< HEAD
	.get("/roles/", RolController.getRoles)
	.post("/roles/", RolController.createRol)
	.get("/roles/:name", RolController.findRolbyName)
	.delete("/roles/", RolController.deleteRol)
	.put("/roles/", RolController.updateRol);
=======
        .get('/roles/',RolController.getRoles)
        .post('/roles/',RolController.createRol)
        .get('/roles/:name',RolController.getRol)
        .delete('/roles/',RolController.deleteRol)
        .put('/roles/',RolController.updateRol);
    
>>>>>>> 9f5301165a0298de077c117ad80751ea17112c62

export default rolRouter;
