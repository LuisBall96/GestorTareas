import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarea {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, length: 100 })
    titulo:string;

    @Column({ nullable: false, length: 500 })
    descripcion:string;

}
