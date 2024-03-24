import { TodoRepository } from '../domain/todo.repository';
import { RegisterTodoDto } from './dtos/register-todo.dto';
import { TodoStatusEnum } from '../domain/todo-status.enum';

export class RegisterTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async registerTodo(data: RegisterTodoDto) {
    const date = new Date();
    await this.todoRepository.saveTodo({
      id: 1,
      status: TodoStatusEnum.CREATED,
      updated_at: date,
      title: 'asas',
      created_at: date,
      description: 'sa',
    });
  }
}
