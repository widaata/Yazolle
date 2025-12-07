import { defineConfig } from 'drizzle-kit';
const dburl = process.env.TURSO_DATABASE_URL;
const dbtoken = process.env.TURSO_AUTH_TOKEN;

if (dburl == undefined) {
  throw new Error("TURSO_DATABASE_URL is not defined.")
}
if (dbtoken == undefined) {
  throw new Error("TURSO_AUTH_TOKEN is not defined.")
}
export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'turso',
  dbCredentials: {
    url: dburl,
    authToken: dbtoken
  }
});
