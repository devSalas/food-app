"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
function response(res, statusCode, data, message) {
	res.status(statusCode).json({
		error: false,
		data,
		message,
	});
}
exports.response = response;
