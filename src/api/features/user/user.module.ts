import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AddUserModule } from './add-user/add-user.module';
import {User} from "../../../domain/entities";
import {AddUserController} from "./add-user/add-user.controller";
import {AddUserService} from "./add-user/add-user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports:[TypeOrmModule],
  controllers:[AddUserController],
  providers:[AddUserService]
})
export class UserModule {}
