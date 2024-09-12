import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import  * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { NotFoundError } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor( 
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async register({ email, password, name }: RegisterDto){
        const user = await this.userService.findOneByEmail(email);

        if (user) throw new BadRequestException('Email '+ email + " ya se encuentra registrado")

        return await this.userService.create({
            name,
            password: await bcryptjs.hash(password, 10),
            email
        })
    }

    async login({ email, password }: LoginDto){

        const user = await this.userService.findOneByEmail(email);

        if (!user) throw new UnauthorizedException('Email '+ email + " es incorrecto o no existe");

        const passWordIsValid = await bcryptjs.compare(password, user.password);

        if (!passWordIsValid) throw new UnauthorizedException('Contraseña no válida');

        const payload = { email: user.email }
        
        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            email
        }
    }
}
