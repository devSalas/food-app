import { PrismaClient } from "@prisma/client";
import type { Order } from "../types/order";

const prisma = new PrismaClient();

export async function getOrders() {
  const orders = await prisma.order.findMany();
  return orders;
}
export async function getOrder(id: number) {
  const newOrder = await prisma.order.findFirst({
    where: {
      id,
    },
  });
  return newOrder;
}
export async function createOrder(order: Order) {
  const orderCreated = await prisma.order.create({
    data: { ...order, date: new Date(order.date) },
  });
  return orderCreated;
}

export async function updateOrder(id: number, order: Order) {
  const orderUpdated = await prisma.order.update({
    where: { id: id },
    data: { ...order, date: new Date(order.date) },
  });
  return orderUpdated;
}
export async function deleteOrder(id: number) {
  const orderDeleted = await prisma.order.delete({
    where: { id: id },
  });
  return orderDeleted;
}


/* funciones para stripe */
export async  function createOrderFromPayment(user_id:number,total:number):Promise<number> {
  const orderCreated = await prisma.order.create({
    data:{
      total:total,
      user_id:user_id,
      payment_status:"EFECTIVO",
      order_status:"PENDIENTE",
      date:new Date()
    } 
   
  });
  const id  =orderCreated.id

  return  id
}
