import { Module } from '@nestjs/common';
import { ContextModule } from './context/context.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import * as process from 'process';

@Module({
  imports: [
    ContextModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: process.env.BD_HOST,
            port: Number(process.env.BD_PORT),
          },
        }),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
