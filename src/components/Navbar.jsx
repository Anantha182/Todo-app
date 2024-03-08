import React from "react";
import { useThemeProvider } from "../hooks/useThemeProvider";
import { THEME_MODES } from "../utils/constants";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeProvider();
  const isLightMode = theme === THEME_MODES.LIGHT;
  const style = {
    backgroundColor: `${isLightMode ? "#F5F5DC" : "#262523"}`,
    color: `${isLightMode ? "#262523" : "#F5F5DC"}`,
  };
  return (
    <div
      className="flex justify-between items-center h-16 mb-5 fixed w-full top-0"
      style={style}
    >
      <span className="text-3xl ml-4">Todo app</span>
      <span className="mr-4">
        {isLightMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            onClick={toggleTheme}
            className="hover:scale-125 transition-transform duration-300"
          >
            <g fill="none" fill-rule="evenodd">
              <g fill="currentColor">
                <path
                  fill-rule="nonzero"
                  stroke="currentColor"
                  stroke-width=".25"
                  d="M22.5 16a6.5 6.5 0 1 1-13 0 6.5 6.5 0 1 1 13 0zM21 16a5 5 0 1 0-10 0 5 5 0 0 0 10 0zM15 4.75v2a.75.75 0 1 0 1.5 0v-2a.75.75 0 1 0-1.5 0zM9.726 6.632l1.023 1.772a.75.75 0 0 0 1.298-.75l-1.023-1.772a.75.75 0 0 0-1.298.75zm-3.844 4.392 1.772 1.023a.75.75 0 0 0 .75-1.298L6.632 9.726a.75.75 0 0 0-.75 1.298zM4.75 17h2a.75.75 0 1 0 0-1.5h-2a.75.75 0 1 0 0 1.5zm1.882 5.274 1.772-1.023a.75.75 0 0 0-.75-1.298l-1.772 1.023a.75.75 0 0 0 .75 1.298zm4.392 3.844 1.023-1.772a.75.75 0 0 0-1.298-.75l-1.023 1.772a.75.75 0 0 0 1.298.75zM17 27.25v-2a.75.75 0 1 0-1.5 0v2a.75.75 0 1 0 1.5 0zm5.274-1.882-1.023-1.772a.75.75 0 1 0-1.298.75l1.023 1.772a.75.75 0 1 0 1.298-.75zm3.844-4.392-1.772-1.023a.75.75 0 0 0-.75 1.298l1.772 1.023a.75.75 0 0 0 .75-1.298zM27.25 15h-2a.75.75 0 1 0 0 1.5h2a.75.75 0 1 0 0-1.5zm-1.882-5.274-1.772 1.023a.75.75 0 0 0 .75 1.298l1.772-1.023a.75.75 0 0 0-.75-1.298zm-4.392-3.844-1.023 1.772a.75.75 0 0 0 1.298.75l1.023-1.772a.75.75 0 0 0-1.298-.75z"
                />
                <path d="M15.612 15.137c0-.782.263-1.494.725-2.043.192-.228.056-.585-.243-.592l-.046-.001c-1.89-.026-3.506 1.53-3.547 3.42a3.5 3.5 0 0 0 5.579 2.893c.238-.177.156-.551-.132-.624-1.356-.344-2.336-1.583-2.336-3.053" />
              </g>
              <path d="M2 28h24V4H2z" />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            onClick={toggleTheme}
            className="hover:scale-125 transition-transform duration-300"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="currentColor"
                fill-rule="nonzero"
                stroke="currentColor"
                stroke-width=".5"
                d="M16.5 13a9.474 9.474 0 0 1 3.517-7.375.75.75 0 0 0-.304-1.313A12.035 12.035 0 0 0 17 4C10.372 4 5 9.372 5 16s5.372 12 12 12c3.59 0 6.924-1.59 9.19-4.287a.75.75 0 0 0-.546-1.232C20.547 22.292 16.5 18.11 16.5 13Zm.5 13.5c-5.8 0-10.5-4.7-10.5-10.5S11.2 5.5 17 5.5c.307 0 .614.014.92.04A10.96 10.96 0 0 0 15 13c0 5.32 3.788 9.771 8.84 10.776l.177.033A10.458 10.458 0 0 1 17 26.5Z"
              />
              <path d="M4 28h24V4H4z" />
            </g>
          </svg>
        )}
      </span>
    </div>
  );
};

export default Navbar;
