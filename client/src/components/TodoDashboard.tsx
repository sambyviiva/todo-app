
import { todoApi } from "../apis/todoApi";
import { useFetchTodos } from "../hooks/useFetchTodos";
import type { Todo, TodoStatusChangeDirection } from "../types";
import { getNextStatus } from "../utils/todo";
import { TodoColumn } from "./TodoColumn";

interface Props {
  setIsCreatePageOpen: (isOpen: boolean) => void;
}

export const Dashboard = (props: Props) => {
  const { data, loading, error, fetchTodos } = useFetchTodos();

  const updateTodoStatus = async (todoToUpdate: Todo, direction: TodoStatusChangeDirection) => {
    const nextStatus = getNextStatus(todoToUpdate, direction);
    await todoApi.UPDATE({...todoToUpdate, status: nextStatus});
    fetchTodos();
  };

  const removeTodo = async (id: number) => {
    await todoApi.DELETE(id);
    fetchTodos();
  }
  
  return (
        <div className="flex flex-col items-center p-4 w-full">
          <div className="text-center relative w-200">
            <h1 className="text-2xl font-bold mb-12 mt-4">TODO List</h1>
            <button className="absolute right-0 top-12 bg-green-600" onClick={() => props.setIsCreatePageOpen(true)}>
              <span className="text-2xl">+&nbsp;&nbsp;Create</span>
            </button>
          </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {data && (
              <div className="grid grid-cols-3 gap-16">
                <TodoColumn todos={data.filter((todo) => todo.status === "TODO")} title="Todo" updateTodoFn={updateTodoStatus} removeTodoFn={removeTodo}/>
                <TodoColumn todos={data.filter((todo) => todo.status === "IN PROGRESS")} title="In Progress" updateTodoFn={updateTodoStatus} removeTodoFn={removeTodo} />
                <TodoColumn todos={data.filter((todo) => todo.status === "DONE")} title="Done" updateTodoFn={updateTodoStatus} removeTodoFn={removeTodo} />
              </div>
            )}
        </div>
    )
}