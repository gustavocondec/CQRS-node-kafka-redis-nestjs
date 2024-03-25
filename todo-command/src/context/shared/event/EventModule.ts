import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Producer } from './Producer';
import { Consumer } from './Consumer';

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
          // consumer: {
          //   groupId: 'micro-anti-fraud',
          // },
          producer: {
            //createPartitioner: Partitioners.DefaultPartitioner,
          },
          run: {
            autoCommit: true,
          },
        },
      },
    ]),
  ],
  providers: [Producer, Consumer],
  exports: [Producer, Consumer],
})
export class EventModule {}
