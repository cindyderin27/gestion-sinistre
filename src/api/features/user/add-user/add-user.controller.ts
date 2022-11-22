import {Body, Controller, Post} from '@nestjs/common';
import {AddUserService} from "./add-user.service";
import {AddUserInput} from "./dto/add-user-input";

@Controller('add-user')
export class AddUserController {
    constructor(private readonly  addUserService: AddUserService) {
    }

    @Post()
    async addUser(@Body() body:AddUserInput){
        return await this.addUserService.addUser(body);
    }
}
