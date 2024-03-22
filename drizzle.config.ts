import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url:"libsql://js-playground-notmaiku.turso.io",
    authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTA5NjE5MDQsImlkIjoiNjI2MjBjZTctNjNmMC00YTY2LTllNmMtOWZkYzg5NDhjZTY4In0.hTLz9bVf9-DWdsIWkXZ4g1DUHVysmSdRHX97Ith2jrKAusi4CibB2RIhJnh-YBVHLyyHNsRJti5DZU4TzFfrCw",
  },
} satisfies Config;



