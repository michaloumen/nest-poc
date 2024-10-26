// src/interface/controllers/hello-world.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HelloWorldService } from '../../application/hello-world/hello-world-service';

@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Post()
  async createHelloWorld(@Body('message') message: string) {
    return this.helloWorldService.createMessage(message);
  }

  // Coloque a rota "all" antes de ":id"
  @Get('all')
  async getAllHelloWorlds() {
    return this.helloWorldService.getAllMessages();
  }

  @Get(':id')
  async getHelloWorld(@Param('id') id: string) {
    return this.helloWorldService.getMessage(id);
  }
}
