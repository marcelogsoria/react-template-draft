import React, { useState } from 'react';
// import { Route } from 'react-router-dom';

import TodoList from 'components/TodoList';
import { TodoListDeleteTodoHandler } from 'components/TodoList/types';
import NewTodo from 'components/NewTodo';
import { Todo } from './todo.model';
import { NewTodoAddTodoHandler } from 'components/NewTodo/types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler: NewTodoAddTodoHandler = ({ todoText }) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: todoText },
    ]);
  };

  const todoDeleteHandler: TodoListDeleteTodoHandler = ({ id }) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
