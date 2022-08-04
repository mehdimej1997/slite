import React from "react";

function ButtonTransparent({ className = "", text = "Click Me", ...props }) {
  return (
    <button
      className={`border-solid border-[1px] rounded-[100px] border-back hover:bg-back hover:text-white transition-all duration-300 ${className}`}
    >
      {props.children || text}
    </button>
  );
}

export default ButtonTransparent;
