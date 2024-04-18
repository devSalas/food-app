"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userRouter = (0, express_1.Router)();
userRouter
    .get('/users/', UserController_1.UserController.getUsers)
    .post('/users/create', UserController_1.UserController.createUser)
    .get('/users/:id', UserController_1.UserController.getUser)
    .delete('/users/:id', UserController_1.UserController.deleteUser)
    .put('/users/:id', UserController_1.UserController.updateUser);
exports.default = userRouter;
