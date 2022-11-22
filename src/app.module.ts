import { Module } from '@nestjs/common';
import { UserModule } from './api/features/user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {OrmConfig} from'./api/config';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal:true,
      }),
    TypeOrmModule.forRoot(OrmConfig),
    UserModule,
  ],
})
export class AppModule {}
