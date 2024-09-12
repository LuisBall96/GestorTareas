import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTareaDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    titulo:string

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    descripcion:string

}
