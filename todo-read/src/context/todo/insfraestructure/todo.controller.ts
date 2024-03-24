import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { ConsultTodoUseCaseImpl } from './services/ConsultTodoUseCaseImpl';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly registerTodoUseCase: RegisterTodoUseCaseImpl,
    private readonly consultTodoUseCase: ConsultTodoUseCaseImpl,
  ) {}

  @Post()
  async register() {
    await this.registerTodoUseCase.registerTodo({ title: '', description: '' });
  }

  @Get()
  async getTodo() {
    return '';
  }

  @Get(':todoId')
  async getTodoById(@Param('todoId', ParseIntPipe) todoId: number) {
    return await this.consultTodoUseCase.getTodoById(todoId);
  }
}
