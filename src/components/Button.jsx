import React from "react";

function Button({ type, text, onClick }) {
  return (
    <button
      onClick={onClick}
      type="primary"
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
