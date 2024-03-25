import { Module } from '@nestjs/common';
import { TodoModule } from './todo/insfraestructure/todo.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, TodoModule],
})
export class ContextModule {}
