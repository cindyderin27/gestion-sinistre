import {InputType} from "@nestjs/graphql";

@InputType()
export class AddUserInput{

    num:string;

    nom:string;

    prenom:string;

    num_telephone: string;

    quartier:string;

    pays:string;

}