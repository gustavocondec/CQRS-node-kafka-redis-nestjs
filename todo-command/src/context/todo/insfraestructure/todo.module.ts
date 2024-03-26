import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { TodoSqlRepository } from './repository/todo.sql.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSchema } from './model/todo.schema';
import { UpdateTodoUseCaseImpl } from './services/UpdateTodoUseCaseImpl';
import { DeleteTodoUseCaseImpl } from './services/DeleteTodoUseCaseImpl';

@Module({
  imports: [TypeOrmModule.forFeature([TodoSchema])],
  controllers: [TodoController],
  providers: [
    RegisterTodoUseCaseImpl,
    UpdateTodoUseCaseImpl,
    DeleteTodoUseCaseImpl,
    TodoSqlRepository,
  ],
})
export class TodoModule {}
