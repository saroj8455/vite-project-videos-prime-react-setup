import { useParams } from 'react-router-dom';

export async function todosLoader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!response.ok) return;
  const todos = await response.json();
  return todos;
}

export async function getTodo({ params }) {
  console.log(params.todoId);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  if (!response.ok) return;
  const todo = await response.json();
  return todo;
}
