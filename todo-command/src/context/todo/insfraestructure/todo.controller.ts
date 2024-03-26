import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RegisterTodoUseCaseImpl } from './services/RegisterTodoUseCaseImpl';
import { CreateTodoDtoImpl } from './dto/create-todo.dto.impl';
import { Producer } from '../../shared/event/Producer';
import { UpdateTodoDtoImpl } from './dto/update-todo.dto.impl';
import { UpdateTodoUseCaseImpl } from './services/UpdateTodoUseCaseImpl';
import { DeleteTodoUseCaseImpl } from './services/DeleteTodoUseCaseImpl';
import { TodoCreatedEvent } from '../../shared/event-list/TodoCreatedEvent';
import { TodoUpdatedEvent } from '../../shared/event-list/TodoUpdatedEvent';
import { TodoDeletedEvent } from '../../shared/event-list/TodoDeletedEvent';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly registerTodoUseCase: RegisterTodoUseCaseImpl,
    private readonly updateTodoUseCase: UpdateTodoUseCaseImpl,
    private readonly deleteTodoUseCase: DeleteTodoUseCaseImpl,
    private readonly eventProducer: Producer,
  ) {}

  @Post()
  async createTodo(@Body() data: CreateTodoDtoImpl) {
    const todoCreated = await this.registerTodoUseCase.registerTodo({
      title: data.title,
      description: data.description,
    });
    await this.eventProducer.emit(new TodoCreatedEvent(todoCreated));
    console.log('create todoId', todoCreated.id);
    return todoCreated;
  }

  @Patch(':todoId')
  async updateTodo(
    @Body() data: UpdateTodoDtoImpl,
    @Param('todoId', ParseIntPipe) todoId: number,
  ) {
    const todo = await this.updateTodoUseCase.updateTodo(data, todoId);
    await this.eventProducer.emit(new TodoUpdatedEvent(todo));
    console.log('updated todoId', todo.id);
    return todo;
  }

  @Delete(':todoId')
  async deleteTodo(@Param('todoId', ParseIntPipe) todoId: number) {
    const todo = await this.deleteTodoUseCase.deleteTodo(todoId);
    await this.eventProducer.emit(new TodoDeletedEvent({ todoId: todo.id }));
    console.log('deleted todoId', todo.id);
    return todo;
  }
}
