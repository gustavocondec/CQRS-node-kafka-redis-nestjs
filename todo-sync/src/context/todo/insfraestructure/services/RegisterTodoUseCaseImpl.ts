import { RegisterTodoUseCase } from '../../application/RegisterTodoUseCase';
import { TodoRedisRepository } from '../repository/todo.redis.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterTodoUseCaseImpl extends RegisterTodoUseCase {
  constructor(private readonly todoRedisRepository: TodoRedisRepository) {
    super(todoRedisRepository);
  }
}
