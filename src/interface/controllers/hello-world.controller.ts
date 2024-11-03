import { Controller, Get, Post, Patch, Body, Param, BadRequestException } from '@nestjs/common';
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

  @Get(':id')
  async getHelloWorld(@Param('id') id: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.helloWorldService.getMessage(id);
  }

  @Patch(':id')
  async duplicateAndUpdateHelloWorld(@Param('id') id: string, @Body('message') message: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.helloWorldService.duplicateMessageWithUpdate(id, message);
  }
}
