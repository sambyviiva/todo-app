import { FastifyInstance } from "fastify";
import fastify from "fastify";
import { todoRoutes } from "./routes/todo";
import { getAuthMiddleware } from "./middleware/auth";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

require('dotenv').config();

export const initApp = async (): Promise<FastifyInstance> => {
  const server = fastify()

  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  server.register(async (instance) => {
    instance.addHook("preHandler", getAuthMiddleware(process.env.API_KEY));
    await instance.register(todoRoutes, { prefix: '/todo' });
  });

  return server.withTypeProvider<ZodTypeProvider>();
}