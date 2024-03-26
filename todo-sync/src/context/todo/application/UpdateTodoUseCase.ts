import { TodoRepository } from '../domain/todo.repository';
import { TodoEntity } from '../domain/todo.entity';

export class UpdateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async updateTodo(data: TodoEntity) {
    await this.todoRepository.updateTodo(data);
  }
}
