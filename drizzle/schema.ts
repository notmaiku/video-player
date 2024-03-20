import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  name: text("Michael").notNull().default("Hey!"),
});

