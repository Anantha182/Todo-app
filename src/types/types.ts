export type Themes = "light" | "dark";

export type Todo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type handleAddTodo = (
  id: string,
  title: string,
  description: string
) => void;
export type handleDeleteTodo = (id: string) => void;
export type handleCompleteTodo = (id: string) => void;
