import { EventEnum } from '../event-list/EventEnum';

export interface EventInterface {
  attributes: {
    timestamp: Date;
    topic: EventEnum;
  };
  data: Record<string, any>;
}
