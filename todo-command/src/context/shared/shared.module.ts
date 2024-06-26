import { Global, Module } from '@nestjs/common';
import { EventModule } from './event/EventModule';

@Global()
@Module({
  imports: [EventModule],
})
export class SharedModule {}
