import { EventInterface } from '../event/EventInterface';
import { EventEnum } from './EventEnum';

export class TodoDeletedEvent implements EventInterface {
  attributes = {
    timestamp: new Date(),
    topic: EventEnum.todoDeleted,
  };

  constructor(readonly data: { todoId: number }) {}
}
