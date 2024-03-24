import { TodoStatusEnum } from './todo-status.enum';

export interface TodoEntity {
  id: number;
  title: string;
  description: string;
  status: TodoStatusEnum;
  created_at: Date;
  updated_at: Date;
}
