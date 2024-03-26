import { TodoEntity } from './todo.entity';

export interface TodoRepository {
  saveTodo(data: TodoEntity): Promise<void>;
}
