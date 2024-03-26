import { TodoEntity } from './todo.entity';

export interface TodoRepository {
  saveTodo(data: TodoEntity): Promise<void>;
  updateTodo(data: TodoEntity): Promise<void>;
  deleteTodo(todoId: number): Promise<void>;
}
