import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
