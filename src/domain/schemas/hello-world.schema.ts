// src/domain/schemas/hello-world.schema.ts
import { schema, types } from '../../infra/database/papr';
import { ObjectId } from 'mongodb';

// Define o schema do documento `HelloWorldSchema`
export const HelloWorldSchema = schema(
  {
    _id: types.objectId({ required: true }),
    message: types.string({ required: true }),
    createdAt: types.date({ required: true }),
    updatedAt: types.date({ required: true }),
  },
  {
    timestamps: true,
  }
);

// Define o tipo `HelloWorldDocument` baseado no schema
export type HelloWorldDocument = {
  _id: ObjectId;
  message: string;
  createdAt: Date;
  updatedAt: Date;
};