import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (!newTodo) return;
    await addTodo(newTodo);
    setNewTodo("");
    setTodos(await getTodos());
  };

  const handleToggle = async (id, done) => {
    await updateTodo(id, { done: !done });
    setTodos(await getTodos());
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(await getTodos());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Flask + React To-Do App</h1>

      <input
        type="text"
        placeholder="Add a task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleToggle(todo.id, todo.done)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
