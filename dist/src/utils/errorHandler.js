"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    res.status(err.statusCode || 500).json({
        error: false,
        data: null,
        message: err.message
    });
}
exports.errorHandler = errorHandler;
