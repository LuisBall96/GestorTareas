import { Injectable } from '@nestjs/common';
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

  async findOneByEmail(email:string){
    return this.userRepository.findOneBy({ email });
  }

}
