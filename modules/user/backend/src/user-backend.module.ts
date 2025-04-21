import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserBackendModule {}
 