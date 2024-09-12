import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Usuario) private readonly userRepository: Repository<Usuario>,) {}

  async create(createUserDto: CreateUserDto): Promise <Usuario> {
    return this.userRepository.save(createUserDto)
  }

  findAll(): Promise <Usuario []>{
    return this.userRepository.find()
  }

  async findOneByEmail(email:string){
    return this.userRepository.findOneBy({ email });
  }

  async findOne(id: number) {
    const usuario = await this.userRepository.findOne({
      where: {
          id
      }
  });

  if (!usuario) {
      return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
  }
    return usuario;
  }

}
