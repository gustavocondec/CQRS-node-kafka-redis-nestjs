import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoRedisRepository } from './repository/todo.redis.repository';
import { ConsultTodoUseCaseImpl } from './services/ConsultTodoUseCaseImpl';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [ConsultTodoUseCaseImpl, TodoRedisRepository],
})
export class TodoModule {}
