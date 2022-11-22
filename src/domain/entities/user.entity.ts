import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    num:string;

    @Column({
        type:'simple-json',
        nullable:false,
    })
    nom:string;

    @Column(
        {
            type:'simple-json',
            nullable:false
        }
    )
    prenom:string;

    @Column(
        {
            type:'simple-json',
            nullable:false
        }
    )
    num_telephone: string;

    @Column(
        {
            type:'simple-json',
            nullable:false
        }
    )
    quartier:string;

    @Column(
        {
            type:'simple-json',
            nullable:false
        }
    )
    pays:string;

}