import { TodoEntity } from './todo.entity';

export interface TodoRepository {
  saveTodo(data: TodoEntity): Promise<void>;
  getTodoById(todoId: number): Promise<TodoEntity | undefined>;
  getAllTodo(): Promise<TodoEntity[]>;
}
