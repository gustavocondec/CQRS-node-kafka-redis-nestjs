import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Producer } from './Producer';
import { Consumer } from './Consumer';
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
            clientId: 'todo-command-producer',
          },
          // consumer: {
          //   groupId: 'micro-anti-fraud',
          // },
          producer: {
            createPartitioner: Partitioners.DefaultPartitioner,
          },
          run: {
            autoCommit: true,
          },
        },
      },
    ]),
  ],
  providers: [Producer],
  exports: [Producer],
})
export class EventModule {}
