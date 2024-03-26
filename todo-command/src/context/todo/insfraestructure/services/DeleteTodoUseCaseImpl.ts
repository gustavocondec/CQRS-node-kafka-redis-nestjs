import { TodoSqlRepository } from '../repository/todo.sql.repository';
import { Injectable } from '@nestjs/common';
import { DeleteTodoUseCase } from '../../application/DeleteTodoUseCase';

@Injectable()
export class DeleteTodoUseCaseImpl extends DeleteTodoUseCase {
  constructor(private readonly todoSqlRepository: TodoSqlRepository) {
    super(todoSqlRepository);
  }
}
