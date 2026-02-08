import z from "zod/v4";

export const zTodoStatus = z.enum(["TODO", "IN PROGRESS", "DONE", "REMOVED"]);

export const zTodo = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    status: zTodoStatus,
});

export type Todo = z.infer<typeof zTodo>;

export const zTodosResponse = z.array(zTodo);
export type TodosResponse = z.infer<typeof zTodosResponse>;