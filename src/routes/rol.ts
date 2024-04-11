import { Router } from "express";
import   {RolController} from "../controllers/RolController";

const rolRouter = Router();

rolRouter
        .get('/roles/',RolController.getRoles)
        .post('/roles/',RolController.createRol)
        .get('/roles/:name',RolController.getRol)
        .delete('/roles/',RolController.deleteRol)
        .put('/roles/',RolController.updateRol);
    

export default rolRouter;
