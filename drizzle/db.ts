import 'dotenv/config';
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
  // url: process.env.TURSO_DATABASE_URL!,
  // authToken: process.env.TURSO_AUTH_TOKEN,
  url:"libsql://js-playground-notmaiku.turso.io",
  authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTA5NjE5MDQsImlkIjoiNjI2MjBjZTctNjNmMC00YTY2LTllNmMtOWZkYzg5NDhjZTY4In0.hTLz9bVf9-DWdsIWkXZ4g1DUHVysmSdRHX97Ith2jrKAusi4CibB2RIhJnh-YBVHLyyHNsRJti5DZU4TzFfrCw",
});

export const db = drizzle(turso);

