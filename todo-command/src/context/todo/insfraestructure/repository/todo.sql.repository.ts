import { TodoRepository } from '../../domain/todo.repository';
import { TodoEntity } from '../../domain/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoSchema } from '../model/todo.schema';
import { Repository } from 'typeorm';

export class TodoSqlRepository implements TodoRepository {
  constructor(
    @InjectRepository(TodoSchema) private todo: Repository<TodoSchema>,
  ) {}
  async createTodo(data: Omit<TodoEntity, 'id'>): Promise<TodoEntity> {
    return await this.todo.save(data);
  }
}
