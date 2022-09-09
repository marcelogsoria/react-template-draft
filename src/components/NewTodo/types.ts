export type NewTodoOnSubmitHandler = (event: React.FormEvent) => void;
export type NewTodoAddTodoHandler = (params: { todoText: string }) => void;
export type NewTodoProps = {
  onAddTodo: NewTodoAddTodoHandler;
};
