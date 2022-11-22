import {ConflictException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../../domain/entities";
import {UserRepository} from "../../../../repository";
import {AddUserInput} from "./dto/add-user-input";
import {UserItemOutput} from "../../../../domain/dto";

@Injectable()
export class AddUserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository:UserRepository)
    {}

    async addUser(input:AddUserInput):
        Promise<UserItemOutput>{
        const user = new User();

        try{
          user.num= input.num;
          user.nom= input.nom;
          user.prenom= input.prenom;
          user.num_telephone= input.num_telephone;
          user.pays = input.pays;
          user.quartier = input.quartier;

          await this.userRepository.save(user);
          return new UserItemOutput(user);
        }
        catch (error){
            if(user.id){
                await this.userRepository.delete(user);
            }
            throw new ConflictException(
                `${AddUserService.name}` +
                error.message,
            );
        }

    }
}
