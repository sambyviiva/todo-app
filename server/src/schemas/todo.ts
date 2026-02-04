import * as z from "zod/mini";

export const zTodo = z.object({
    title: z.string(),
    status: z.enum(["TODO", "IN PROGRESS", "DONE"]),
});