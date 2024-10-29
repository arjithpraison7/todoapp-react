import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.removing ? 'removing' : ''}`}>
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        ✖
      </button>
    </div>
  );
}

export default TodoItem;
