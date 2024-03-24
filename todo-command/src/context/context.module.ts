import { Module } from '@nestjs/common';
import { TodoModule } from './todo/insfraestructure/todo.module';

@Module({
  imports: [TodoModule],
})
export class ContextModule {}
