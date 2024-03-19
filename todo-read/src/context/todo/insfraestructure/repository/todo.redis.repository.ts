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

  getTodoById(todoId: number): Promise<TodoEntity> {
    return Promise.resolve(undefined) as unknown as Promise<TodoEntity>;
  }
}
