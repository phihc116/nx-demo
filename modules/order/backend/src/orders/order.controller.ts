import { Controller, Get, Post, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder() {
    return this.orderService.createOrder();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrderById(id);
  }
}
