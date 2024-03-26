import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ConsultTodoUseCaseImpl } from './services/ConsultTodoUseCaseImpl';

@Controller('todo')
export class TodoController {
  constructor(private readonly consultTodoUseCase: ConsultTodoUseCaseImpl) {}

  @Get(':todoId')
  async getTodoById(@Param('todoId', ParseIntPipe) todoId: number) {
    console.log('read todoId', todoId);
    return await this.consultTodoUseCase.getTodoById(todoId);
  }
}
