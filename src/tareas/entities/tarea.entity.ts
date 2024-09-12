import { Usuario } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarea {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false, length: 100 })
    titulo:string;

    @Column({ nullable: false, length: 500 })
    descripcion:string;

    @Column()
    usuarioId: number

    @ManyToOne(() => Usuario, usuario => usuario.tareas)
    usuario: Usuario;

}
