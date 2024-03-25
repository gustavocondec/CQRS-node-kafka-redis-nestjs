import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.KAFKA_BROKER);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER!],
      },
    },
  });
  //await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
