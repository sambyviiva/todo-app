import { useEffect, useState } from "react";
import type { Todo } from "../types";
import { todoApi } from "../apis/todoApi";
import { getErrorMessage } from "../utils/error";

export const Dashboard = () => {

  const [data, setData] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await todoApi.GET();
        setData(response);
        setError(null);
      } catch (err) {
        setError(getErrorMessage(err));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to the dashboard! Here you can manage your todos.</p>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {data && (
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>
                            <h2 className="text-xl font-semibold">{todo.title}</h2>
                            <p>{todo.description}</p>
                            <p>Status: {todo.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}