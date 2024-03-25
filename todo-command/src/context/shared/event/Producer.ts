import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { EventInterface } from './EventInterface';

@Injectable()
export class Producer implements OnApplicationBootstrap {
  constructor(
    @Inject('MY_CLIENT_KAFKA') private readonly client: ClientKafka,
  ) {}
  async emit(event: EventInterface) {
    console.log('emitira');
    await this.client
      .emit(event.attributes.topic, JSON.stringify(event))
      .toPromise();
  }
  async onApplicationBootstrap(): Promise<void> {
    await this.client.connect();
  }
}
