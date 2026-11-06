import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <div id="wd-context-todo-list">
      <h3>Todo List</h3>
      <ul className="list-none p-0">
        <li className="mb-2 flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border border-neutral-300 px-3 py-1.5"
            id="wd-context-todo-title"
          />
          <button
            type="button"
            onClick={() => {
              addTodo(title);
              setTitle("");
            }}
            className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-context-todo-add"
          >
            Add
          </button>
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              className="w-full rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              id={`wd-context-todo-delete-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
