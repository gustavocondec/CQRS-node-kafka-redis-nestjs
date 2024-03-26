import { TodoRedisRepository } from '../repository/todo.redis.repository';
import { Injectable } from '@nestjs/common';
import { DeleteTodoUseCase } from '../../application/DeleteTodoUseCase';

@Injectable()
export class DeleteTodoUseCaseImpl extends DeleteTodoUseCase {
  constructor(private readonly todoRedisRepository: TodoRedisRepository) {
    super(todoRedisRepository);
  }
}
