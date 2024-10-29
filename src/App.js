import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new to-do
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  // Toggle completed state
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a to-do
  const deleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, removing: true } : todo
    );
    setTodos(updatedTodos);
  
    // Delay the removal to allow the animation to complete
    setTimeout(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, 200);
  };
  

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
