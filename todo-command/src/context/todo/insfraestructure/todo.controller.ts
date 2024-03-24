import { Body, Controller, Post } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { CreateTodoDtoImpl } from './dto/create-todo.dto.impl';

@Controller('todo')
export class TodoController {
  constructor(private readonly registerTodoUseCase: RegisterTodoUseCaseImpl) {}

  @Post()
  async createTodo(@Body() data: CreateTodoDtoImpl) {
    return await this.registerTodoUseCase.registerTodo({
      title: data.title,
      description: data.description,
    });
  }
}
