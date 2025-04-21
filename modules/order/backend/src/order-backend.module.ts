import { Module } from '@nestjs/common';
import { OrderService } from './orders/order.service';
import { OrderController } from './orders/order.controller';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderBackendModule {}
