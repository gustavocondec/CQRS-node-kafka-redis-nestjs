import { TodoRepository } from '../domain/todo.repository';
import { RegisterTodoDto } from './dtos/register-todo.dto';
import { TodoStatusEnum } from '../domain/todo-status.enum';
import { NotFoundException } from '@nestjs/common';

export class UpdateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async updateTodo(data: any, todoId: number) {
    const todo = await this.todoRepository.getTodoById(todoId);
    if (!todo) throw new NotFoundException();
    if (Object.keys(todo).length == 0) return todo;
    const date = new Date();
    await this.todoRepository.updateTodo(
      {
        ...data,
        updated_at: date,
      },
      todoId,
    );
    return (await this.todoRepository.getTodoById(todoId))!;
  }
}
