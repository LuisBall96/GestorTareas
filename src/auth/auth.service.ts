import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import  * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor( private readonly userService: UsersService){}

    async register({ email, password, name }: RegisterDto){
        const user = await this.userService.findOneByEmail(email);

        if (user) throw new BadRequestException('Email '+ email + " ya se encuentra registrado")

        return await this.userService.create({
            name,
            password: await bcryptjs.hash(password, 10),
            email
        })
    }

    login(){
        return 'login'
    }
}
