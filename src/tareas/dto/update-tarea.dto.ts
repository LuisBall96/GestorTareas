import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaDto } from './create-tarea.dto';
import { IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateTareaDto extends PartialType(CreateTareaDto) {
}
