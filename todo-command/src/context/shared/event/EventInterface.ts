export interface EventInterface {
  attributes: {
    topic: string;
    timestamp: Date;
  };
  data: Record<string, any>;
}
