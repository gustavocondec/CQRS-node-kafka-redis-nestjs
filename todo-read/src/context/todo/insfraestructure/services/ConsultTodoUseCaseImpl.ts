import { ConsultTodoUseCase } from '../../application/ConsultTodoUseCase';
import { Injectable } from '@nestjs/common';
import { TodoRedisRepository } from '../repository/todo.redis.repository';

@Injectable()
export class ConsultTodoUseCaseImpl extends ConsultTodoUseCase {
  constructor(private readonly todoRedisRepository: TodoRedisRepository) {
    super(todoRedisRepository);
  }
}
