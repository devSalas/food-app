"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder =
	exports.updateOrder =
	exports.createOrder =
	exports.getOrder =
	exports.getOrders =
		void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getOrders() {
	const orders = await prisma.order.findMany();
	return orders;
}
exports.getOrders = getOrders;
async function getOrder(id) {
	const newOrder = await prisma.order.findFirst({
		where: {
			id,
		},
	});
	return newOrder;
}
exports.getOrder = getOrder;
async function createOrder(order) {
	const orderCreated = await prisma.order.create({
		data: { ...order, date: new Date(order.date) },
	});
	return orderCreated;
}
exports.createOrder = createOrder;
async function updateOrder(id, order) {
	const orderUpdated = await prisma.order.update({
		where: { id: id },
		data: { ...order, date: new Date(order.date) },
	});
	return orderUpdated;
}
exports.updateOrder = updateOrder;
async function deleteOrder(id) {
	const orderDeleted = await prisma.order.delete({
		where: { id: id },
	});
	return orderDeleted;
}
exports.deleteOrder = deleteOrder;
