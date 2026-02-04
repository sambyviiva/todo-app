import { FastifyInstance, FastifyServerOptions } from "fastify";
import fastify from "fastify";
import { todoRoutes } from "./routes/todo";
import { getAuthMiddleware } from "./middleware/auth";

require('dotenv').config();

export const initApp = async (): Promise<FastifyInstance> => {
    const server = fastify()

    server.register(async (instance) => {
        instance.addHook("preHandler", getAuthMiddleware(process.env.API_KEY));
        await instance.register(todoRoutes, { prefix: '/todos' });
    });

  return server;
}