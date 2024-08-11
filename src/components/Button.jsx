import React from "react";

function Button({ type, text }) {
  return (
    <button
      type="primary"
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
