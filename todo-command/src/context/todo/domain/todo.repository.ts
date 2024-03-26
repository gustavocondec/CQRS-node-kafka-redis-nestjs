import { TodoEntity } from './todo.entity';

export interface TodoRepository {
  getTodoById(todoId: number): Promise<TodoEntity | null>;
  createTodo(data: Omit<TodoEntity, 'id'>): Promise<TodoEntity>;
  updateTodo(data: Omit<TodoEntity, 'id'>, todoId: number): Promise<void>;
  deleteTodo(todoId: number): Promise<void>;
}
