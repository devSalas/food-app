"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJsonResponse = void 0;
function sendJsonResponse(res, statusCode, data, message) {
	res.status(statusCode).json({
		error: false,
		data,
		message,
	});
}
exports.sendJsonResponse = sendJsonResponse;
