import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
    }),
  );

  const micro = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER!],
        clientId: 'todo-sync-client',
      },
      consumer: {
        groupId: 'todo-sync-consumer',
      },
      run: {
        autoCommit: false,
      },
    },
  });
  await micro.listen();
  //await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
