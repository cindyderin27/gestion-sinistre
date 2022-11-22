import {User} from "../entities";

export class UserItemOutput {

constructor(user:User) {
    this.id= user.id;
    this.num= user.num;
    this.nom= user.nom;
    this.prenom= user.prenom;
    this.num_telephone= user.num_telephone;
    this.quartier= user.quartier;
    this.pays= user.pays;
}
    id:number;
    num:string;
    nom:string;
    prenom:string;
    num_telephone?:string;
    quartier?:string;
    pays?:string;

}