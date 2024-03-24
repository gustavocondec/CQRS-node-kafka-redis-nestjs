import { RegisterTodoUseCase } from '../../application/RegisterTodoUseCase';
import { TodoSqlRepository } from '../repository/todo.sql.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterTodoUseCaseImpl extends RegisterTodoUseCase {
  constructor(private readonly todoSqlRepository: TodoSqlRepository) {
    super(todoSqlRepository);
  }
}
