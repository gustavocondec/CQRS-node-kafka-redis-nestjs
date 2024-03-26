import { TodoRepository } from '../../domain/todo.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { TodoEntity } from '../../domain/todo.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class TodoRedisRepository implements TodoRepository {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async saveTodo(data: TodoEntity) {
    await this.cacheManager.set(String(data.id), data);
  }

  async deleteTodo(todoId: number): Promise<void> {
    await this.cacheManager.del(String(todoId));
  }

  async updateTodo(data: TodoEntity): Promise<void> {
    await this.cacheManager.set(String(data.id), data);
  }
}
