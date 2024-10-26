// src/interface/controllers/hello-world.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HelloWorldService } from '../../application/hello-world/hello-world-service';

@Controller('hello-world') // Certifique-se de que o caminho está correto aqui
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Post()
  async createHelloWorld(@Body('message') message: string) {
    return this.helloWorldService.createMessage(message);
  }

  @Get(':id')
  async getHelloWorld(@Param('id') id: string) {
    return this.helloWorldService.getMessage(id);
  }
}
