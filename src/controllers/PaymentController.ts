import type { request, Response } from "express";
import Stripe from "stripe";
import { catchedAsync } from "../utils/catchedAsync";
import type { CustomRequest } from "../types/CustomRequest";
import type { Product } from "../types/product";
import { CustomError } from "../utils/errors";
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';
dotenv.config();

const key_stripe = process.env.STRIPE_KEY || "";
const stripe = new Stripe(key_stripe);

const endpointSecret = process.env.ENDPOINT_SECRET_WEBHOOK || "";

const postPagePayment = async (req: CustomRequest, res: Response) => {
	const products: Product[] = req.body;

	const data = products.map((item) => {
		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: item.name,
					images: [item.image],
				},
				unit_amount: item.price,
			},
			quantity: item.count,
		};
	});

	const productsId = products.map((item) => item.id);

	const objectProductsId: { [key: string]: number | undefined } = {};
	productsId.forEach((value, index) => {
		objectProductsId[index] = value;
	});

	console.log(objectProductsId);
	const sesion = await stripe.checkout.sessions.create({
		success_url: process.env.REDIRED_SUCCESS_URL,
		line_items: [...data],
		mode: "payment",
		metadata: {
			...objectProductsId,
			userId: 2,
		},
	});

	res.send(sesion);
};

const webHookPayment = async (req: Request | any, res: Response) => {
	try {
		const sig = req.headers["stripe-signature"] as string;
		console.log({ n: 60, signature: sig });
		if (!sig) return;
		const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
		console.log(event);

		switch (event.type) {
			case "checkout.session.completed":
				{
					const checkoutSessionCompleted = event.data.object;
					const metadata = checkoutSessionCompleted.metadata;
					const total= checkoutSessionCompleted.amount_total
					getData(metadata,total);
				}
				break;

			default:
				throw new CustomError("No se realizo el pago", 400);
		}

		res.json({ data: event.data.object.metadata });
	} catch (error) {
		console.log(error);
	}
};

interface Metadata {
	productsId?: number[];
	userId?: number;
}

const prisma = new PrismaClient();

async function getData(metadata: Metadata | null, total: number | null) {
	console.log(metadata, total);
	if (!metadata) return;
	if (!total) return;
	const { userId, ...productsId } = metadata;
	const orderCreated = await prisma.order.create({
		data: {
			client_id: Number(userId )?? 2,
			date: new Date(),
			payment_status: "YAPE",
			order_status: "PENDIENTE",
			total: total,
		},
	});

	for (const key in productsId) {
		await prisma.details_Order.create({
			data: {
				order_id: Number(orderCreated.id),
				product_id:Number(productsId[key]),
			},
		});
	}
}

export const PaymentController = {
	postPagePayment: catchedAsync(postPagePayment),
	webHookPayment: webHookPayment,
};
