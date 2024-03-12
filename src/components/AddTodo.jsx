import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { useThemeProvider } from "../hooks/useThemeProvider";
import { THEME_MODES } from "../utils/constants";

const AddTodo = ({ handleAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const { theme } = useThemeProvider();

  const style = {
    backgroundColor: `${theme === THEME_MODES.LIGHT ? "#F5F5DC" : "#262523"}`,
    color: `${theme === THEME_MODES.LIGHT ? "#262523" : "#F5F5DC"}`,
  };

  const handleSubmit = () => {
    if (!todoTitle || !todoDescription) {
      alert("Please fill both title and description to proceed");
      return;
    }
    setTodoDescription("");
    setTodoTitle("");
    handleAddTodo(uuidv4(), todoTitle, todoDescription);
  };

  return (
    <div className="flex justify-between p-2 m-2 items-center" style={style}>
      <div className="flex ml-4 w-3/4">
        <span className="m-1 w-1/2">
          <label htmlFor="todoTitle" className="text-xl">
            Todo Title:
          </label>
          <input
            type="text"
            id="todoTitle"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black block w-full p-1.5"
          />
        </span>
        <span className="m-1 w-1/2">
          <label htmlFor="todoDescription" className="text-xl">
            Todo Description:
          </label>
          <input
            type="text"
            id="todoDescription"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
            className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black block p-1.5"
          />
        </span>
      </div>
      <div className="mr-4">
        <Button color="orange" onClick={handleSubmit}>
          Add todo
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
