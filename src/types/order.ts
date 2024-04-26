enum Payment_status {
  EFECTIVO = "EFECTIVO",
  YAPE = "YAPE",
}

enum Order_status {
  PENDIENTE = "PENDIENTE",
  ENTREGADO = "ENTREGADO",
  CANCELADO = "CANCELADO",
}

export interface Order {
  id?: number;
  user_id: number;
  date: Date;
  total: number;
  order_status: Order_status;
  payment_status: Payment_status;
  createdAt?: Date;
  updatedAt?: Date;
}
