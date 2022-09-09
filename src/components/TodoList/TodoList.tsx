import React from 'react';
import type { TodoListProps } from './types';
import styles from './TodoList.module.scss';

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul className={styles['todo-list']}>
      {items.map((todo) => (
        <li key={todo.id} className={styles['todo-item']}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo({ id: todo.id })}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
