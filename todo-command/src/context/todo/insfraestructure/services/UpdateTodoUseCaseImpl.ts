import { TodoSqlRepository } from '../repository/todo.sql.repository';
import { Injectable } from '@nestjs/common';
import { UpdateTodoUseCase } from '../../application/UpdateTodoUseCase';

@Injectable()
export class UpdateTodoUseCaseImpl extends UpdateTodoUseCase {
  constructor(private readonly todoSqlRepository: TodoSqlRepository) {
    super(todoSqlRepository);
  }
}
