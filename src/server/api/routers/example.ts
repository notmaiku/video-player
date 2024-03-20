import { wrap } from "@decs/typeschema";
import { string } from "valibot";
import { createTRPCRouter, publicProcedure } from "../utils";

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
  halt: publicProcedure
    .query(() => {
      return `hello halt`;
    })
});
