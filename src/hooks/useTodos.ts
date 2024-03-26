import { useState, useCallback } from "react";
import { todos as initialTodos } from "../utils/sampleTodos";
import { Todo } from "../types/types";
import {
  handleAddTodo,
  handleCompleteTodo,
  handleDeleteTodo,
} from "../types/types";

const useTodos = () => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(initialTodos));
  }
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos"))
  );

  const handleCompleteTodo: handleCompleteTodo = useCallback(
    (id: string) => {
      const newTodos: Todo[] = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: true };
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    [todos]
  );

  const handleDeleteTodo: handleDeleteTodo = useCallback(
    (id: string): void => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    [todos]
  );

  const handleAddTodo: handleAddTodo = useCallback(
    (id: string, title: string, description: string): void => {
      if (!id || !title || !description) {
        return;
      }
      const newTodo: Todo = {
        id,
        title,
        description,
        isCompleted: false,
      };
      const newTodos: Todo[] = [...todos, newTodo];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    [todos]
  );

  return {
    todos,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  };
};

export default useTodos;
