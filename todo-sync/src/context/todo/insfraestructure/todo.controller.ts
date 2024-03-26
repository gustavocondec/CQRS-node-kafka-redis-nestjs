import { Controller } from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { EventEnum } from '../../shared/event-list/EventEnum';
import { type TodoCreatedEvent } from '../../shared/event-list/TodoCreatedEvent';
import { TodoDeletedEvent } from '../../shared/event-list/TodoDeletedEvent';
import { UpdateTodoUseCaseImpl } from './services/UpdateTodoUseCaseImpl';
import { DeleteTodoUseCaseImpl } from './services/DeleteTodoUseCaseImpl';

@Controller()
export class TodoController {
  constructor(
    private readonly registerTodoUseCase: RegisterTodoUseCaseImpl,
    private readonly updatedTodoUseCase: UpdateTodoUseCaseImpl,
    private readonly deletedTodoUseCase: DeleteTodoUseCaseImpl,
  ) {}

  @EventPattern(EventEnum.todoCreated)
  async registerTodo(
    @Payload()
    data: TodoCreatedEvent,
    @Ctx() ctx: KafkaContext,
  ) {
    console.log('register', data.data.id);
    await this.registerTodoUseCase.registerTodo(data.data);
  }

  @EventPattern(EventEnum.todoUpdated)
  async updateTodo(
    @Payload()
    data: TodoCreatedEvent,
    @Ctx() ctx: KafkaContext,
  ) {
    console.log('actualizar', data.data.id);
    await this.updatedTodoUseCase.updateTodo(data.data);
  }

  @EventPattern(EventEnum.todoDeleted)
  async deleteTodo(
    @Payload()
    data: TodoDeletedEvent,
    @Ctx() ctx: KafkaContext,
  ) {
    console.log('borrar', data.data.todoId);
    await this.deletedTodoUseCase.deleteTodo(data.data.todoId);
  }
}
