import { useEffect, useState } from "react";
import type { Todo } from "../types";
import { todoApi } from "../apis/todoApi";
import { getErrorMessage } from "../utils/error";
  
export const useFetchTodos = () => {
  const [data, setData] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    fetchTodos();
  }, []);

  return { data, loading, error, fetchTodos };
}