import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { TodoSqlRepository } from './repository/todo.sql.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSchema } from './model/todo.schema';

@Module({
  imports: [TypeOrmModule.forFeature([TodoSchema])],
  controllers: [TodoController],
  providers: [RegisterTodoUseCaseImpl, TodoSqlRepository],
})
export class TodoModule {}
