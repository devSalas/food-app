"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePassword = exports.EncryptPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function EncryptPassword({ password }) {
    const passwordEncripted = await bcrypt_1.default.hash(password, 12);
    return passwordEncripted;
}
exports.EncryptPassword = EncryptPassword;
async function decodePassword({ password, passwordEncripted }) {
    const passwordDecode = await bcrypt_1.default.compare(password, passwordEncripted);
    return passwordDecode;
}
exports.decodePassword = decodePassword;
