import { wrap } from "@decs/typeschema";
import { string } from "valibot";
import { createTRPCRouter, publicProcedure } from "../utils";
import { db } from "../../../../drizzle/db"
import { users } from "../../../../drizzle/schema";



export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(wrap(string()))
    .query(({ input }) => {
      return `Hello ${input}!`;
    }),
  start: publicProcedure
    .query(() => {
      return `this is trpc`;
    }),
  getUsers: publicProcedure
    .query(() => {
      const result = db.select().from(users).all();
      return result
    }),
  // getName : publicProcedure
  //   .query(() => {
  //     const result = db.select('name').from(users).all();
  //     return result
  //   })
});
