import { RouteHandler } from "fastify";
import db from "../db";
import { UpdateTodosRoute, zTodo } from "../schemas/todo";

export const updateTodos: RouteHandler<UpdateTodosRoute> = async (request, reply) => {
    const { id, title, description, status } = request.body;

    const updatedTodo = await db.query(
        'UPDATE todo SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
        [title, description, status, id]
    );
    const validatedTodo = zTodo.parse(updatedTodo.rows[0]);

    return reply.send(validatedTodo);
};