// src/application/hello-world/hello-world.module.ts
import { Module } from '@nestjs/common';
import { HelloWorldService } from './hello-world-service';
import { HelloWorldController } from '../../interface/controllers/hello-world.controller';

@Module({
  controllers: [HelloWorldController],
  providers: [HelloWorldService],
})
export class HelloWorldModule {}
