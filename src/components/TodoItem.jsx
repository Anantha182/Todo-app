import React from "react";
import Button from "./Button";
import { useThemeProvider } from "../hooks/useThemeProvider";
import { THEME_MODES } from "../utils/constants";

const TodoItem = ({
  title,
  description,
  isCompleted,
  handleCompleteTodo,
  handleDeleteTodo,
  id,
}) => {
  const { theme } = useThemeProvider();

  const style = {
    backgroundColor: `${theme === THEME_MODES.LIGHT ? "#F5F5DC" : "#262523"}`,
    color: `${theme === THEME_MODES.LIGHT ? "#262523" : "#F5F5DC"}`,
  };

  return (
    <div className={`flex justify-between w-full my-1`} style={style}>
      <div
        className={`flex flex-col justify-center ml-4 ${
          isCompleted ? "line-through" : ""
        }`}
      >
        <div className="text-4xl">{title}</div>
        <div className="text-xl text-wrap">{description}</div>
      </div>
      <div className="flex justify-between items-center mr-4">
        <Button
          isDisabled={isCompleted}
          onClick={() => handleCompleteTodo(id)}
          color="green"
        >
          Complete
        </Button>

        <Button
          isDisabled={isCompleted}
          onClick={() => handleDeleteTodo(id)}
          color="red"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
