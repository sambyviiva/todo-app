import { RouteHandler } from "fastify";
import { GetTodosRoute } from "../routes/todo";

export const getTodos: RouteHandler<GetTodosRoute> = async (_request, reply) => {
    return reply.send([{title: "Sample Todo", status: "TODO"}]);
};