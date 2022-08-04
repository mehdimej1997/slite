import React from "react";

function ButtonBlue({ className = "", text = "Click Me", ...props }) {
  return (
    <button
      className={`border-solid bg-blue text-white rounded-[100px] hover:border-blue-dark hover:bg-blue-dark hover:text-white transition-all duration-300 ${className}`}
    >
      {props.children || text}
    </button>
  );
}

export default ButtonBlue;
