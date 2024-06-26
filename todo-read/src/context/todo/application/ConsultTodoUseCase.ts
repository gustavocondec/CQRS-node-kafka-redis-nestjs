import { TodoRepository } from '../domain/todo.repository';
import { NotFoundException } from '@nestjs/common';

export class ConsultTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodoById(todoId: number) {
    const todo = await this.todoRepository.getTodoById(todoId);
    if (!todo) throw new NotFoundException();
    return todo;
  }
}
