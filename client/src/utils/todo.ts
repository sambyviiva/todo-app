import  { type Todo, TodoStatus, type TodoStatusChangeDirection } from "../types";

export const getNextStatus = (todo: Todo, direction: TodoStatusChangeDirection) => {
    if(todo.status === "REMOVED") {
        throw new Error("Cannot move a removed todo");
    }
    
    const statusOrder = [TodoStatus.todo, TodoStatus.inProgress, TodoStatus.done];
    const currentIndex = statusOrder.indexOf(todo.status);

    if (direction === "left" && currentIndex > 0) {
        return statusOrder[currentIndex - 1];
    } else if (direction === "right" && currentIndex < statusOrder.length - 1) {
        return statusOrder[currentIndex + 1];
    }

    return todo.status;
}