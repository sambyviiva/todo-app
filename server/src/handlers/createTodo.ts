import { RouteHandler } from "fastify";
import { CreateTodoRoute } from "../routes/todo";
import db from "../db";
import { zTodo } from "../schemas/todo";

export const createTodos: RouteHandler<CreateTodoRoute> = async (request, reply) => {

    const  { title, description, status } = request.body;

        const createdTodo = await db.query(
            'INSERT INTO todo (title, description, status) VALUES ($1, $2, $3) RETURNING *',
            [title, description, status]
        );
        
        const pgReturnValue = createdTodo.rows[0];
        const validatedTodo = zTodo.parse(pgReturnValue);
        return reply.send(validatedTodo);
};