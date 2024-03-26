import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { TodoRedisRepository } from './repository/todo.redis.repository';

@Module({
  controllers: [TodoController],
  providers: [RegisterTodoUseCaseImpl, TodoRedisRepository],
})
export class TodoModule {}
