// src/application/hello-world/hello-world.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { ObjectId, Collection } from 'mongodb';
import { client } from '../../infra/database/papr';
import { HelloWorldDocument } from '../../domain/schemas/hello-world.schema';

@Injectable()
export class HelloWorldService {
  private helloWorldCollection: Collection<HelloWorldDocument>;

  constructor() {
    this.helloWorldCollection = client.db().collection<HelloWorldDocument>('hello_world');
  }

  async createMessage(message: string): Promise<HelloWorldDocument> {
    const newMessage: HelloWorldDocument = {
      _id: new ObjectId(),
      message,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await this.helloWorldCollection.insertOne(newMessage);
    return newMessage;
  }

  async getMessage(id: string): Promise<HelloWorldDocument | null> {
    // Verifique se o `id` é um ObjectId válido
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    
    return await this.helloWorldCollection.findOne({ _id: new ObjectId(id) });
  }

  async getAllMessages(): Promise<HelloWorldDocument[]> {
    return await this.helloWorldCollection.find().toArray();
  }
}
