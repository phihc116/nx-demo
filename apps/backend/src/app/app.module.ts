import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserBackendModule } from '@modules/user-backend';
import { OrderBackendModule } from '@modules/order-backend';

@Module({
  imports: [UserBackendModule, OrderBackendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
