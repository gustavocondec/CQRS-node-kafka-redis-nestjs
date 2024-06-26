import { TodoRepository } from '../domain/todo.repository';
import { TodoEntity } from '../domain/todo.entity';

export class RegisterTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async registerTodo(data: TodoEntity) {
    await this.todoRepository.saveTodo(data);
  }
}
