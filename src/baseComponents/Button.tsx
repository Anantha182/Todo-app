import React from "react";

type BottonProps = {
  isDisabled?: boolean;
  onClick: React.MouseEventHandler;
  color: string;
  children: React.ReactNode;
};

const Button: React.FC<BottonProps> = ({
  isDisabled,
  onClick,
  color,
  children,
}) => {
  const style = {
    textDecoration: isDisabled && color === "green" ? "line-through" : "none",
  };

  return (
    <button
      onClick={onClick}
      className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:outline-none focus:ring-4 focus:ring-${color}-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-900`}
      disabled={isDisabled && color === "green"}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
