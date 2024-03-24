import { Module } from '@nestjs/common';
import { ContextModule } from './context/context.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSchema } from './context/todo/insfraestructure/model/todo.schema';
import * as process from 'process';

@Module({
  imports: [
    ContextModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.BD_HOST,
      port: Number(process.env.BD_PORT),
      username: 'root',
      password: 'root',
      database: 'todo',
      entities: [TodoSchema],
      timezone: 'Z',
      synchronize: true, // ONLY DEV FOR TEST!!!!!
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
