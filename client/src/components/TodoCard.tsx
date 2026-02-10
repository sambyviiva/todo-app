import type { Todo, TodoStatusChangeDirection } from "../types";

interface Props {
    todo: Todo,
    updateTodoFn: (todo: Todo, direction: TodoStatusChangeDirection) => void,
    removeTodoFn: (id: number) => Promise<void>,
}
export const TodoCard = ({ todo, updateTodoFn, removeTodoFn }: Props) => {
    return (
        <div className="rounded border-black border-4 p-4 mb-4 bg-indigo-950 w-100 relative">
            <button className="absolute top-3 right-4 p-1 text-sm italic" onClick={() => removeTodoFn(todo.id)}>🗑</button>
            <div className="text-2xl text-center mb-4 font-bold w-75 truncate">{todo.title}</div>
            <div className="h-34 break-all">{todo.description}</div>
            <div className="relative h-10">
                {(todo.status === "IN PROGRESS" || todo.status === "DONE") && <button className="absolute left-0" onClick={() => updateTodoFn(todo, "left")}>&#8592;</button>}
                {(todo.status === "TODO" || todo.status === "IN PROGRESS") && <button className="absolute right-0" onClick={() => updateTodoFn(todo, "right")}>&#8594;</button>}
            </div>
        </div>
    );
}