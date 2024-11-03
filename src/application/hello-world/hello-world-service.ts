import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
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
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return await this.helloWorldCollection.findOne({ _id: new ObjectId(id) });
  }

  async getAllMessages(): Promise<HelloWorldDocument[]> {
    return await this.helloWorldCollection.find().toArray();
  }

  async duplicateMessageWithUpdate(id: string, newMessage: string): Promise<HelloWorldDocument> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }

    const originalDocument = await this.helloWorldCollection.findOne({ _id: new ObjectId(id) });
    if (!originalDocument) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }

    const duplicatedDocument: HelloWorldDocument = {
      _id: new ObjectId(),
      message: newMessage,
      createdAt: originalDocument.createdAt,
      updatedAt: new Date(),
    };

    await this.helloWorldCollection.insertOne(duplicatedDocument);

    return duplicatedDocument;
  }
}
