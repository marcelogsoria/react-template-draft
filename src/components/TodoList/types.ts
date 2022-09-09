export type TodoListDeleteTodoHandler = (params: { id: string }) => void;
export type TodoListProps = {
  items: { id: string; text: string }[];
  onDeleteTodo: TodoListDeleteTodoHandler;
};
