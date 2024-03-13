import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import useHandleTodos from "../hooks/useHandleTodos";

const Main = () => {
  const { todos, handleCompleteTodo, handleDeleteTodo, handleAddTodo } =
    useHandleTodos();
  return (
    <div style={{ marginTop: "4.5rem" }}>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Main;
