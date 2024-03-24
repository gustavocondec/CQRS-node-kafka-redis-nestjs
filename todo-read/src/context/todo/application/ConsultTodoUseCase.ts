import { TodoRepository } from '../domain/todo.repository';

export class ConsultTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodoById(todoId: number) {
    return await this.todoRepository.getTodoById(todoId);
  }

  async getTodos() {
    return await this.todoRepository.getAllTodo();
  }
}
