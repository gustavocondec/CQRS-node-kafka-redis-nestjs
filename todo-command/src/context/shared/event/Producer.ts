import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class Producer implements OnApplicationBootstrap {
  constructor(
    @Inject('MY_CLIENT_KAFKA') private readonly client: ClientKafka,
  ) {}
  async emit(event: any) {
    this.client.emit(event.attributes.topic, JSON.stringify(event));
  }
  async onApplicationBootstrap(): Promise<void> {
    await this.client.connect();
  }
}
