import { Module } from '@nestjs/common';
import { ContextModule } from './context/context.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSchema } from './context/todo/insfraestructure/model/todo.schema';

@Module({
  imports: [
    ContextModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
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
