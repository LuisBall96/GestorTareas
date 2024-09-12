import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";


export class RegisterDto{

    @IsString()
    @MinLength(5)
    name: string;

    @IsEmail()
    email:string;

    @Transform(({ value }) => value.trim())
    @MinLength(6)
    @IsString()
    password:string;

}