// src/application/hello-world/hello-world.service.ts
import { Injectable } from '@nestjs/common';
import { ObjectId, Collection } from 'mongodb';
import { client } from '../../infra/database/papr'; // Importa o client diretamente
import { HelloWorldDocument } from '../../domain/schemas/hello-world.schema';

@Injectable()
export class HelloWorldService {
  private helloWorldCollection: Collection<HelloWorldDocument>;

  constructor() {
    // Inicializa a coleção `hello_world` diretamente com o client do MongoDB
    this.helloWorldCollection = client.db().collection<HelloWorldDocument>('hello_world');
  }

  // Método para criar uma nova mensagem "Hello World"
  async createMessage(message: string): Promise<HelloWorldDocument> {
    const newMessage: HelloWorldDocument = {
      _id: new ObjectId(),
      message,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insere a nova mensagem e retorna o documento criado
    await this.helloWorldCollection.insertOne(newMessage);
    return newMessage;
  }

  // Método para buscar uma mensagem "Hello World" por ID
  async getMessage(id: string): Promise<HelloWorldDocument | null> {
    // Converte `id` para `ObjectId` e busca o documento
    return await this.helloWorldCollection.findOne({ _id: new ObjectId(id) });
  }
}
