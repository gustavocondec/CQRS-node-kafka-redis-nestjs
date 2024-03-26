import { TodoRedisRepository } from '../repository/todo.redis.repository';
import { Injectable } from '@nestjs/common';
import { UpdateTodoUseCase } from '../../application/UpdateTodoUseCase';

@Injectable()
export class UpdateTodoUseCaseImpl extends UpdateTodoUseCase {
  constructor(private readonly todoRedisRepository: TodoRedisRepository) {
    super(todoRedisRepository);
  }
}
