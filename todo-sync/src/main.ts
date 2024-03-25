import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import * as process from 'process';
import { logLevel } from '@nestjs/microservices/external/kafka.interface';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      options: {
        name: 'MY_CLIENT_KAFKA',
        client: {
          logLevel: logLevel.DEBUG,
          brokers: [process.env.KAFKA_BROKER!],
          clientId: 'sync',
        },
      },
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: [process.env.KAFKA_BROKER!],
  //     },
  //   },
  // });
  // await app.startAllMicroservices();
  await app.listen();
}
bootstrap();
