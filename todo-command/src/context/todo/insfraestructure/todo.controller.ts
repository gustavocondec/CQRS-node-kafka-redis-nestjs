import { Body, Controller, Post } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { CreateTodoDtoImpl } from './dto/create-todo.dto.impl';
import { Producer } from '../../shared/event/Producer';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly registerTodoUseCase: RegisterTodoUseCaseImpl,
    private readonly eventProducer: Producer,
  ) {}

  @Post()
  async createTodo(@Body() data: CreateTodoDtoImpl) {
    await this.registerTodoUseCase.registerTodo({
      title: data.title,
      description: data.description,
    });
    await this.eventProducer.emit({
      attributes: { topic: 'todoCreated', timestamp: new Date() },
      data: { info: 'hola' },
    });
  }
}
