import { Controller } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { ConsultTodoUseCaseImpl } from './services/ConsultTodoUseCaseImpl';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class TodoController {
  constructor(
    private readonly registerTodoUseCase: RegisterTodoUseCaseImpl,
    private readonly consultTodoUseCase: ConsultTodoUseCaseImpl,
  ) {}

  @EventPattern('todoCreated')
  async register(@Payload() data: any, @Ctx() ctx: KafkaContext) {
    console.log('LLEGA EVENTO A SYNC', data);
    await this.registerTodoUseCase.registerTodo({ title: '', description: '' });
  }
}
