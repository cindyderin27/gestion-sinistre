import {Repository} from "typeorm";
import {User} from "../domain/entities";


export class UserRepository extends Repository<User>{}