import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/types";
import { handleDeleteTodo, handleCompleteTodo } from "../types/types";

type TodoListProps = {
  todos: Todo[];
  handleCompleteTodo: handleCompleteTodo;
  handleDeleteTodo: handleDeleteTodo;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="m-2">
      {todos &&
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
              id={todo.id}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
