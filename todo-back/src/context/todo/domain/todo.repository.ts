import { TodoEntity } from './todo.entity';

export interface TodoRepository {
  createTodo(data: Omit<TodoEntity, 'id'>): Promise<TodoEntity>;
}
