import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TodoEntity } from '../../domain/todo.entity';
import { TodoStatusEnum } from '../../domain/todo-status.enum';

export class UpdateTodoDtoImpl implements Partial<TodoEntity> {
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(TodoStatusEnum)
  @IsOptional()
  status?: TodoStatusEnum;
}
