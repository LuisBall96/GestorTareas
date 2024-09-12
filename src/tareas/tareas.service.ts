import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TareasService {

  constructor(@InjectRepository(Tarea) private tareaRepository : Repository<Tarea>) {}

  
  async create(createTareaDto: CreateTareaDto): Promise<Tarea> {

    const nuevaTarea = this.tareaRepository.create(createTareaDto)
    return await this.tareaRepository.save(nuevaTarea);
  }

  findAll(): Promise <Tarea []>{
    return this.tareaRepository.find()
  }

  async findOne(id: number) {
    const tarea = await this.tareaRepository.findOne({
      where: {
          id
      }
  });

  if (!tarea) {
      return new HttpException('Tarea no encontrada', HttpStatus.NOT_FOUND)
  }
    return tarea;
  }

  async update(id: number, updateTareaDto: UpdateTareaDto): Promise<Tarea> {

    const tareaParaActualizar = await this.tareaRepository.findOneBy({ id });
  
    if (!tareaParaActualizar) {
      throw new NotFoundException('Tarea no encontrada');
    }
  
    Object.assign(tareaParaActualizar, updateTareaDto);
  
    return this.tareaRepository.save(tareaParaActualizar);
  }
  

  async remove(id: number): Promise <Tarea> {
    const tareaAEliminar = await this.tareaRepository.findOneBy({id})

    if (!tareaAEliminar) throw new NotFoundException('Tarea no encontrada')

    const eliminandoTarea = this.tareaRepository.delete(tareaAEliminar);

    return tareaAEliminar
  }
}
