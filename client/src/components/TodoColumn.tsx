import type { Todo, TodoStatusChangeDirection } from "../types";
import { TodoCard } from "./TodoCard";

interface Props {
    todos: Todo[],
    title: string,
    updateTodoFn: (todoToUpdate: Todo, direction: TodoStatusChangeDirection) => Promise<void>,
    removeTodoFn: (id: number) => Promise<void>,
}

export const TodoColumn = ({ todos, title, updateTodoFn, removeTodoFn }: Props) => {
    return (
        <div>
            <div className="text-center text-2xl font-bold p-8 w-100">{title}</div>
            {todos.map(todo => (
                <TodoCard key={todo.id} todo={todo} updateTodoFn={updateTodoFn} removeTodoFn={removeTodoFn}/>
            ))}
        </div>
    );
}