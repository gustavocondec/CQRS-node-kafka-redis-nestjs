import { Controller, Get } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';

@Controller('todo')
export class TodoController {
  constructor(private readonly registerTodoUseCase: RegisterTodoUseCaseImpl) {}

  @Get()
  async getTodo() {}

  @Get(':todoId')
  async getTodoById() {}
}
