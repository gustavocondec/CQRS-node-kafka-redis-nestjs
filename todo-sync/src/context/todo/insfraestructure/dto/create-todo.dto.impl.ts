import { RegisterTodoDto } from '../../application/dtos/register-todo.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDtoImpl implements RegisterTodoDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
