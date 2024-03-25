import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Producer } from './Producer';
import { Consumer } from './Consumer';
import * as process from 'process';
import { Partitioners } from 'kafkajs';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MY_CLIENT_KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [process.env.KAFKA_BROKER!],
            clientId: 'antifraud-client-producer',
          },
          consumer: {
            groupId: 'micro-anti-fraud',
          },
          producer: {
            createPartitioner: Partitioners.DefaultPartitioner,
          },
          run: {
            autoCommit: false,
          },
        },
      },
    ]),
  ],
  providers: [Producer, Consumer],
  exports: [Producer, Consumer],
})
export class EventModule {}
