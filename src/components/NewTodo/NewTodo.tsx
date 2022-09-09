import React, { useRef } from "react";

import styles from "./NewTodo.module.scss";
import { NewTodoProps } from "./types";
import { NewTodoOnSubmitHandler } from "./types";
import { useIntl } from "react-intl";
import messages from "./messages";

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const { formatMessage } = useIntl();
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler: NewTodoOnSubmitHandler = (
    event: React.FormEvent
  ): void => {
    event.preventDefault();
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value;
      onAddTodo({ todoText: enteredText });
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className={styles["form-control"]}>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">{formatMessage(messages.hola)}</button>
    </form>
  );
};

export default NewTodo;
