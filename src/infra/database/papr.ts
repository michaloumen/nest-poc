// src/infra/database/papr.ts
import Papr, { schema, types } from 'papr';
import { MongoClient } from 'mongodb';

// Cria o cliente do MongoDB
const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017');
const papr = new Papr();

// Função para inicializar o `papr` com o banco de dados
async function initializePapr() {
  await client.connect();
  papr.initialize(client.db('hello_world_db')); // Substitua pelo seu nome de banco de dados
}

initializePapr();

export { papr, schema, types, client }; // Inclui o `client` na exportação
