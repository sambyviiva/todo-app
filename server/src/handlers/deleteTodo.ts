import { RouteHandler } from "fastify";
import db from "../db";
import { DeleteTodosRoute, zTodo } from "../schemas/todo";

export const removeTodos: RouteHandler<DeleteTodosRoute> = async (request, reply) => {
    const { id } = request.body;

    const removedTodo = await db.query(
        'DELETE FROM todo WHERE id = $1 RETURNING *',
        [id]
    );
    const validatedTodo = zTodo.parse(removedTodo.rows[0]);
    return reply.send(validatedTodo);
};