import React, { useState } from 'react';
import useTodoStore from '../stores/TodoStore';
import useTodoInputStore from '../stores/TodoInputStore';

function TodoForm(props) {
  const addTodo = useTodoStore(state => state.addTodo);
  const handleInput = useTodoInputStore(state => state.handleInput);
  const todoInput = useTodoInputStore(state => state.todoInput);
  const setTodoInput = useTodoInputStore(state => state.setTodoInput);

  //const [todoInput, setTodoInput] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    addTodo(todoInput);

    setTodoInput('');
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default TodoForm;
