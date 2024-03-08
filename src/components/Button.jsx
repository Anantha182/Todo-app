import React from "react";

const Button = ({ onClick, color, children }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:outline-none focus:ring-4 focus:ring-${color}-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-900`}
    >
      {children}
    </button>
  );
};

export default Button;
