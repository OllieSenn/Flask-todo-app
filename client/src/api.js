const API_URL = "http://127.0.0.1:5000/api";

export async function getTodos() 
{
    const res = await fetch(`${API_URL}/todos`);
    return res.json();
}

export async function addTodo(title)
{
    const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({title}),
    });
    return res.json();
}

export async function updateTodo(id, updates) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
  return res.json();
}