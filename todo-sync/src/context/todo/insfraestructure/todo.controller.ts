import { Controller } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { ConsultTodoUseCaseImpl } from './services/ConsultTodoUseCaseImpl';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class TodoController {
  constructor(
    private readonly registerTodoUseCase: RegisterTodoUseCaseImpl,
    private readonly consultTodoUseCase: ConsultTodoUseCaseImpl,
  ) {}

  @EventPattern('todoCreated')
  async register() {
    console.log('LLEGA EVENTO A SYNC');
    await this.registerTodoUseCase.registerTodo({ title: '', description: '' });
  }
}
