import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserBackendModule } from '@modules/user-backend';

@Module({
  imports: [UserBackendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
