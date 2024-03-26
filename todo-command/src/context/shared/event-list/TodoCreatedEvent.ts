import { EventInterface } from '../event/EventInterface';
import { TodoEntity } from '../../todo/domain/todo.entity';
import { EventEnum } from './EventEnum';

export class TodoCreatedEvent implements EventInterface {
  attributes = {
    timestamp: new Date(),
    topic: EventEnum.todoCreated,
  };

  constructor(readonly data: TodoEntity) {}
}
