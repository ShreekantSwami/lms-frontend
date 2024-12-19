import React from "react";

const Button = (props) => {
  return (
    <button
      id={props.id || undefined}
      className={`btn ${props.className}`}
      onClick={props.onClick || undefined}
    >
      {props.text}
    </button>
  );
};

export default Button;
