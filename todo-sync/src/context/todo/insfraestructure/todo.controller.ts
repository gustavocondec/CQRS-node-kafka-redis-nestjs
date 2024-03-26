import { Controller } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class TodoController {
  constructor(private readonly registerTodoUseCase: RegisterTodoUseCaseImpl) {}

  @EventPattern('todoCreated')
  async register(@Payload() data: any, @Ctx() ctx: KafkaContext) {
    console.log('LLEGA EVENTO A SYNC', new Date().toISOString());
    await this.registerTodoUseCase.registerTodo({ title: '', description: '' });
  }
}
