import z from "zod/v4";

export type TodoStatusChangeDirection = "left" | "right";

export const TodoStatus = { todo: "TODO", inProgress: "IN PROGRESS", done: "DONE", removed: "REMOVED" } as const;
export const zTodoStatus = z.enum(TodoStatus);

export const zTodo = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    status: zTodoStatus,
});

export type Todo = z.infer<typeof zTodo>;

export const zTodosResponse = z.array(zTodo);
export type TodosResponse = z.infer<typeof zTodosResponse>;