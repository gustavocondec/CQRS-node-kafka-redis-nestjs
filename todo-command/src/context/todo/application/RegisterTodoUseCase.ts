import { TodoRepository } from '../domain/todo.repository';
import { RegisterTodoDto } from './dtos/register-todo.dto';
import { TodoStatusEnum } from '../domain/todo-status.enum';

export class RegisterTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async registerTodo(data: RegisterTodoDto) {
    const date = new Date();
    return await this.todoRepository.createTodo({
      title: data.title,
      description: data.description,
      status: TodoStatusEnum.CREATED,
      created_at: date,
      updated_at: date,
    });
  }
}
