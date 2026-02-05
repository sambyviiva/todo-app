import { RouteHandler } from "fastify";
import db from "../db";
import { GetTodosRoute, zTodosResponse } from "../schemas/todo";

export const getTodos: RouteHandler<GetTodosRoute> = async (_request, reply) => {

    const todosFromDb = await db.query('SELECT * FROM todo');
    const validatedTodos = zTodosResponse.parse(todosFromDb.rows);

    return reply.send(validatedTodos);
};