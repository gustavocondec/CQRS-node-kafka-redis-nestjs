import { EventInterface } from '../event/EventInterface';
import { TodoEntity } from '../../todo/domain/todo.entity';
import { EventEnum } from './EventEnum';

export class TodoUpdatedEvent implements EventInterface {
  attributes = {
    timestamp: new Date(),
    topic: EventEnum.todoUpdated,
  };

  constructor(readonly data: TodoEntity) {}
}
