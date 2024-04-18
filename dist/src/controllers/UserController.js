"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.updateUser = exports.deleteUser = exports.findUserbyName = exports.getUser = exports.createUser = exports.getUsers = void 0;
const services = __importStar(require("../services/UserService"));
const responseHttp_1 = require("../utils/responseHttp");
const catchedAsync_1 = require("../utils/catchedAsync");
async function getUsers(req, res) {
    const users = await services.getUsers();
    (0, responseHttp_1.sendJsonResponse)(res, 200, users, "all users");
}
exports.getUsers = getUsers;
async function createUser(req, res) {
    const { address, email, image, name, password } = req.body;
    const users = await services.createUser({
        address,
        email,
        image: "",
        name,
        password,
    });
    (0, responseHttp_1.sendJsonResponse)(res, 201, users, "user created");
}
exports.createUser = createUser;
async function getUser(req, res) {
    const { id } = req.params;
    const userid = +id;
    const user = await services.getUserbyId({ id: userid });
    (0, responseHttp_1.sendJsonResponse)(res, 201, user, "user found");
}
exports.getUser = getUser;
async function findUserbyName(req, res) {
    const { name } = req.params;
    const user = await services.getUserbyName({ name });
    res.status(200).json({ message: "gerson junior", data: user });
}
exports.findUserbyName = findUserbyName;
async function deleteUser(req, res) {
    const { id } = req.params;
    const userid = +id;
    const user = await services.deleteUser({ id: userid });
    (0, responseHttp_1.sendJsonResponse)(res, 204, user, "user deleted");
}
exports.deleteUser = deleteUser;
async function updateUser(req, res) {
    const { id } = req.params;
    const userid = +id;
    const { address, email, image, name, password } = req.body;
    const user = await services.updateUser({
        id: userid,
        address,
        email,
        image,
        name,
        password,
    });
    (0, responseHttp_1.sendJsonResponse)(res, 200, user, "user updated");
}
exports.updateUser = updateUser;
exports.UserController = {
    getUsers: (0, catchedAsync_1.catchedAsync)(getUsers),
    getUser: (0, catchedAsync_1.catchedAsync)(getUser),
    createUser: (0, catchedAsync_1.catchedAsync)(createUser),
    updateUser: (0, catchedAsync_1.catchedAsync)(updateUser),
    deleteUser: (0, catchedAsync_1.catchedAsync)(deleteUser),
};
