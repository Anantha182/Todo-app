import { useState } from "react";
import { todos as initialTodos } from "../utils/sampleTodos";

const useHandleTodos = () => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(initialTodos));
  }
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const handleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAddTodo = (id, title, description) => {
    if (!id || !title || !description) {
      return;
    }
    const newTodos = [
      ...todos,
      {
        id: id,
        title: title,
        description: description,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return {
    todos,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  };
};

export default useHandleTodos;
