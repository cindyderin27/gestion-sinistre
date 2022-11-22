import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {User} from "../../domain/entities";
import * as dotenv from 'dotenv';

dotenv.config();
export const OrmConfig:TypeOrmModuleOptions= {
    type:process.env.DATABASE_TYPE as 'mysql',
    host:process.env.DATABASE_HOST,
    username:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    port:parseInt(process.env.DATABASE_PORT),
    database:process.env.DATABASE_NAME,
    entities:[User],
    synchronize:true,
};