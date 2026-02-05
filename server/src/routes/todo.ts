import { FastifyPluginAsync } from "fastify";
import { createTodos } from "../handlers/createTodo";
import { getTodos } from "../handlers/getTodos";
import { CreateTodoRoute, GetTodosRoute, UpdateTodosRoute, zTodo, zTodosResponse, zTodoId, DeleteTodosRoute } from "../schemas/todo";
import { updateTodos } from "../handlers/updateTodo";
import { removeTodos } from "../handlers/deleteTodo";

export const todoRoutes: FastifyPluginAsync = (instance) => {
  instance.route<GetTodosRoute>({
    method: "GET",
    url: "/",
    handler: getTodos,
    schema: {
      response: {
        200: zTodosResponse,
      },
    },
  });

  instance.route<CreateTodoRoute>({
    method: "POST",
    url: "/",
    handler: createTodos,
    schema: {
      body: zTodo.omit({ id: true }),
      response: {
        200: zTodo,
      },
    },
  });

  instance.route<UpdateTodosRoute>({
    method: "PUT",
    url: "/",
    handler: updateTodos,
    schema: {
      body: zTodo,
      response: {
        200: zTodo,
      },
    },
  });

  instance.route<DeleteTodosRoute>({
    method: "DELETE",
    url: "/",
    handler: removeTodos,
    schema: {
      body: zTodoId,
      response: {
        200: zTodo,
      },
    },
  });

  return Promise.resolve();
};

export { CreateTodoRoute };
