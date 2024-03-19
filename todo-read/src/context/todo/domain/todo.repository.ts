import { TodoEntity } from './todo.entity';

export interface TodoRepository {
  getTodoById(todoId: number): Promise<TodoEntity>;
  getAllTodo(): Promise<TodoEntity[]>;
}
