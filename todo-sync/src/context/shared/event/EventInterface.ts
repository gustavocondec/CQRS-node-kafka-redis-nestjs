import { EventEnum } from '../event-list/EventEnum';

export interface EventInterface {
  attributes: {
    topic: EventEnum;
    timestamp: Date;
  };
  data: Record<string, any>;
}
