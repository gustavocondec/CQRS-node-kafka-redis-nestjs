import { TodoRepository } from '../domain/todo.repository';
import { NotFoundException } from '@nestjs/common';

export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async deleteTodo(todoId: number) {
    const todo = await this.todoRepository.getTodoById(todoId);
    if (!todo) throw new NotFoundException();
    await this.todoRepository.deleteTodo(todoId);
    return todo;
  }
}
