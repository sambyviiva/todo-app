import { FastifyError, RouteGenericInterface } from "fastify";
import * as z from "zod/v4";

export const zTodoId = z.object({
  id: z.number(),
});

export const zTodo = zTodoId.extend({
    title: z.string(),
    description: z.string(),
    status: z.enum(["TODO", "IN PROGRESS", "DONE", "REMOVED"]),
});

export type Todo = z.infer<typeof zTodo>;
export type TodoId = z.infer<typeof zTodoId>;

export const zTodosResponse = z.array(zTodo);
export type GetTodosResponse = z.infer<typeof zTodosResponse>;

// Route interfaces
export interface GetTodosRoute extends RouteGenericInterface {
  readonly Reply: GetTodosResponse | FastifyError;
}

export interface CreateTodoRoute extends RouteGenericInterface {
  readonly Reply: Todo | FastifyError;
  readonly Body: Omit<Todo, "id">;
}

export interface UpdateTodosRoute extends RouteGenericInterface {
  readonly Reply: Todo | FastifyError;
  readonly Body: Todo;
}

export interface DeleteTodosRoute extends RouteGenericInterface {
  readonly Reply: Todo | FastifyError;
  readonly Body: TodoId;
}