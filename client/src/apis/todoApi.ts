import { zTodo, zTodosResponse, type Todo } from "../types";

export const todoApi = {
    GET: async (url?: string) => {
        const response = await fetch(`${import.meta.env.VITE_TODO_API_URL}/${url ?? ''}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_TODO_API_KEY,
            },
        });
        return zTodosResponse.parse(await response.json());
    },
    POST: async (body: Todo, url?: string) => {
        const response = await fetch(`${import.meta.env.VITE_TODO_API_URL}/${url ?? ''}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_TODO_API_KEY,
            },
            body: JSON.stringify(body),
        });
        return zTodo.parse(await response.json());
    }
};