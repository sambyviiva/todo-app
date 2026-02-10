import { useState } from "react";
import { todoApi } from "../apis/todoApi";
import { TodoStatus } from "../types";
import { useFetchTodos } from "../hooks/useFetchTodos";

interface Props {
    setIsCreatePageOpen: (isOpen: boolean) => void;
}

export const CreatePage = (props: Props) => {

      const { fetchTodos, loading } = useFetchTodos();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setDescription(e.target.value);
    }

    const onCreateTodo = async () => {
        await todoApi.POST({
            title: title,
            description: description,
            status: TodoStatus.TODO,
        });
        await fetchTodos();
        props.setIsCreatePageOpen(false);
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center p-4 w-140">
                <h1 className="text-2xl font-bold mb-16 mt-4">Create New Todo</h1>
                <form>
                    <label htmlFor="title" className="font-bold mb-2">Title</label>
                    <input id="title" type="text" value={title} onChange={handleTitleChange} placeholder="Todo title max 40 characters" maxLength={40} className="border border-indigo-300 rounded p-2 mb-4 w-full" />
                    <label htmlFor="description" className="font-bold mb-2">Description</label>
                    <textarea id="description" value={description} onChange={handleDescriptionChange} placeholder="Todo description max 200 characters" rows={4} maxLength={200} className="border border-indigo-300 rounded p-2 mb-4 w-full" />
                </form>
                <div className="flex items-center w-80 mt-8 justify-between">
                    <button onClick={() => props.setIsCreatePageOpen(false)} disabled={loading}>&lt;&nbsp;&nbsp;Cancel</button>
                    <button onClick={onCreateTodo} disabled={loading}>Create Todo&nbsp;&nbsp;&gt;</button>
                </div>
                {loading && <p>Creating...</p>}
            </div>
        </div>
    )
}