import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  createOrder() {
    // Logic tạo đơn hàng
    return { message: 'Order created successfully' };
  }

  getOrderById(id: string) {
    // Logic lấy đơn hàng theo ID
    return { id, status: 'pending' };
  }
}
