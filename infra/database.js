import { Client } from "pg";
import { env } from "../config/env";

async function query(queryObject) {
  const client = new Client({
    user: env.POSTGRES_USER,
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    database: env.POSTGRES_DB,
    password: env.POSTGRES_PASSWORD,
  });

  try {
    const connected = await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (client) {
      await client.end();
    }
  }
}

const database = { query };

export default database;
