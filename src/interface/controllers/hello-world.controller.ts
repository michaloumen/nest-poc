// src/interface/controllers/hello-world.controller.ts
import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common'
import { HelloWorldService } from '../../application/hello-world/hello-world-service';

@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Post()
  async createHelloWorld(@Body('message') message: string) {
    return this.helloWorldService.createMessage(message);
  }

  @Get('all')
  async getAllHelloWorlds() {
    return this.helloWorldService.getAllMessages();
  }

  @Get('new-route')
  async newRoute() {
    return { message: 'Hello from the new route!' };
  }

  @Get(':id')
  async getHelloWorld(@Param('id') id: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.helloWorldService.getMessage(id);
  }
}