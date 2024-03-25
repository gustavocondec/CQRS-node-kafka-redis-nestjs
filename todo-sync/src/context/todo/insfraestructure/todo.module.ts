import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { TodoRedisRepository } from './repository/todo.redis.repository';
import { ConsultTodoUseCaseImpl } from './services/ConsultTodoUseCaseImpl';

@Module({
  controllers: [TodoController],
  providers: [
    RegisterTodoUseCaseImpl,
    ConsultTodoUseCaseImpl,
    TodoRedisRepository,
  ],
})
export class TodoModule {}
