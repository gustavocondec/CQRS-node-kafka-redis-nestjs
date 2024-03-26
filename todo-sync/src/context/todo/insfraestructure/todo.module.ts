import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { TodoRedisRepository } from './repository/todo.redis.repository';
import { UpdateTodoUseCaseImpl } from './services/UpdateTodoUseCaseImpl';
import { DeleteTodoUseCaseImpl } from './services/DeleteTodoUseCaseImpl';

@Module({
  controllers: [TodoController],
  providers: [
    RegisterTodoUseCaseImpl,
    TodoRedisRepository,
    UpdateTodoUseCaseImpl,
    DeleteTodoUseCaseImpl,
  ],
})
export class TodoModule {}
