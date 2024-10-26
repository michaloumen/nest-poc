// src/domain/entities/hello-world.entity.ts
import { HelloWorldDocument } from '../schemas/hello-world.schema';

export class HelloWorld {
  constructor(private readonly props: HelloWorldDocument) {}

  get message() {
    return this.props.message;
  }
  
  set message(newMessage: string) {
    this.props.message = newMessage;
  }
}
