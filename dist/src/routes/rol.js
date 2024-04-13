"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RolController_1 = require("../controllers/RolController");
const rolRouter = (0, express_1.Router)();
rolRouter
    .get('/roles/:id', RolController_1.RolController.getRoles)
    .post('/roles/create', RolController_1.RolController.createRol)
    .get('/roles/:id', RolController_1.RolController.getRol)
    .delete('/roles/:id', RolController_1.RolController.deleteRol)
    .put('/roles/:id', RolController_1.RolController.updateRol);
exports.default = rolRouter;
