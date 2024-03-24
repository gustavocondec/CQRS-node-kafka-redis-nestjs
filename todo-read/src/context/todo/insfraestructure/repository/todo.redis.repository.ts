import { TodoRepository } from '../../domain/todo.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { TodoEntity } from '../../domain/todo.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class TodoRedisRepository implements TodoRepository {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getAllTodo(): Promise<TodoEntity[]> {
    return Promise.resolve([]);
  }

  async getTodoById(todoId: number): Promise<TodoEntity | undefined> {
    return this.cacheManager.get(String(todoId));
  }

  async saveTodo(data: TodoEntity) {
    console.log('deae', data);
    await this.cacheManager.set(String(data.id), data);
  }
}
