import { TodoRepository } from '../domain/todo.repository';

export class ConsultTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}
}
