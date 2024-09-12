import { Tarea } from "src/tareas/entities/tarea.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



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

    @OneToMany(() => Tarea, tarea => tarea.usuario)
    tareas: Tarea[];

}
