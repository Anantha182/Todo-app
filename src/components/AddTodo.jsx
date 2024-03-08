import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ handleAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const customHandleAddTodo = () => {
    setTodoTitle("");
    setTodoDescription("");
    return handleAddTodo({ todoTitle, todoDescription });
  };
  return (
    <div>
      <label htmlFor="todoTitle">Todo Title:</label>
      <input
        type="text"
        id="todoTitle"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        className="border border-black"
      />

      <label htmlFor="todoDescription">Todo Description:</label>
      <input
        type="text"
        id="todoDescription"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        className="border border-black"
      />

      <Button
        color="orange"
        onClick={() => {
          setTodoDescription("");
          setTodoTitle("");
          return handleAddTodo(uuidv4(), todoTitle, todoDescription);
        }}
      >
        Add todo
      </Button>
    </div>
  );
};

export default AddTodo;
