import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
const dburl = process.env.TURSO_DATABASE_URL;
if (dburl == undefined) {
  throw new Error("TURSO_DATABASE_URL is not defined.");
}

const client = createClient({
  url: dburl, //|| 'file:.data/dev.db',
  authToken: process.env.TURSO_AUTH_TOKEN
});

export const db = drizzle(client, { schema });
