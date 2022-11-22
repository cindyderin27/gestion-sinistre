import { Module } from '@nestjs/common';
import { AddUserService } from './add-user.service';
import { AddUserController } from './add-user.controller';

@Module({
  providers: [AddUserService],
  controllers: [AddUserController]
})
export class AddUserModule {}
