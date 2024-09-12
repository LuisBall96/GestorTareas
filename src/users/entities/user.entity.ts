import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique: true, nullable: false})
    email:string;

    @Column({ nullable: true })
    password:string;

    @Column({default: 'user'})
    rol: string;

    @CreateDateColumn()
    createdAt: Date;

}
