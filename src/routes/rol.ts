import { Router } from "express";
import  * as RolController from "../controllers/RolController";

const rolRouter = Router()


rolRouter.get('/roles/',RolController.getRoles);
rolRouter.post('/roles/',RolController.createRol);
rolRouter.get('/roles/:name',RolController.findRolbyName);
rolRouter.delete('/roles/',RolController.deleteRol);
rolRouter.put('/roles/',RolController.updateRol);
    



export default rolRouter