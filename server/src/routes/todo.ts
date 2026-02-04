import { FastifyError, FastifyPluginAsync, RouteGenericInterface } from "fastify";
import { getTodos } from "../handlers/getTodos";
import { zTodo } from "../schemas/todo";
import * as z from "zod/mini";

const zTodosResponse = z.array(zTodo);

export type GetTodosResponse = z.infer<typeof zTodosResponse>;

export interface GetTodosRoute extends RouteGenericInterface {
  readonly Reply: GetTodosResponse | FastifyError;
}

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

  return Promise.resolve();
};