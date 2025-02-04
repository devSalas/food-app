import { PrismaClient } from "@prisma/client";
import type { OrderDetail } from "../types/orderDetail";

const prisma = new PrismaClient();

export async function getOrderDetails() {
  const categories = await prisma.details_Order.findMany();
  return categories;
}

export async function getOrderDetail(id: number) {
  const newOrderDetail = await prisma.details_Order.findFirst({
    where: {
      id,
    },
  });
  return newOrderDetail;
}

export async function createOrderDetail(details_Order: OrderDetail) {
  const details_OrderCreated = await prisma.details_Order.create({
    data: details_Order,
  });
  return details_OrderCreated;
}

export async function updateOrderDetail(
  id: number,
  details_Order: OrderDetail
) {
  const details_OrderUpdated = await prisma.details_Order.update({
    where: { id: id },
    data: { ...details_Order },
  });
  return details_OrderUpdated;
}
export async function deleteOrderDetail(id: number) {
  const details_OrderDeleted = await prisma.details_Order.delete({
    where: { id: id },
  });
  return details_OrderDeleted;
}


/* funciones para stripe */
export async  function createOrderDetailFromPayment(order_id:number,product_id:number) {
   await prisma.details_Order.create({
    data:{
      order_id:order_id,
      product_id:product_id 
    } 
   
  });
}
