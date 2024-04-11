"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchedAsync = void 0;
const catchedAsync = (fn) => {
	return (req, res, next) => {
		fn(req, res).catch((err) => next(err));
	};
};
exports.catchedAsync = catchedAsync;
