import { TodoRepository } from '../domain/todo.repository';

export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async deleteTodo(todoId: number) {
    await this.todoRepository.deleteTodo(todoId);
  }
}
