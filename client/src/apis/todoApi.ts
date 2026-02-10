import { zTodo, zTodosResponse, type Todo } from "../types";

export const todoApi = {
    GET: async () => {
        const response = await fetch(`${import.meta.env.VITE_TODO_API_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_TODO_API_KEY,
            },
        });
        return zTodosResponse.parse(await response.json());
    },
    POST: async (body: Omit<Todo, "id">) => {
        const response = await fetch(`${import.meta.env.VITE_TODO_API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_TODO_API_KEY,
            },
            body: JSON.stringify(body),
        });
        return zTodo.parse(await response.json());
    },
    UPDATE: async (body: Todo) => {
        const response = await fetch(`${import.meta.env.VITE_TODO_API_URL}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_TODO_API_KEY,
            },
            body: JSON.stringify(body),
        });
        return zTodo.parse(await response.json());
    },
    DELETE: async (id: number) => {
        const response = await fetch(`${import.meta.env.VITE_TODO_API_URL}?id=${id}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': import.meta.env.VITE_TODO_API_KEY,
            }
        });
        return zTodo.parse(await response.json());
    },
};