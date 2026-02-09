import { RouteHandler } from "fastify";
import db from "../db";
import { DeleteTodosRoute, zTodo } from "../schemas/todo";

export const removeTodos: RouteHandler<DeleteTodosRoute> = async (request, reply) => {
    const { id } = request.body;

    const result = await db.query(
        'UPDATE todo SET removed_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *',
        [id]
    );

    const pgReturnValue = result.rows[0];
    const validatedTodo = zTodo.parse(pgReturnValue);
    return reply.send(validatedTodo);
};