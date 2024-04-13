"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
function errorResponse(res, statusCode, message) {
    return res.status(statusCode || 500).json({
        error: true,
        data: null,
        message: message,
    });
}
exports.errorResponse = errorResponse;
