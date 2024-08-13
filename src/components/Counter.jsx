import React from "react";

function Counter({ itemCount, packedItems }) {
  return (
    <p>
      <b>{packedItems}</b> /{itemCount} items packed
    </p>
  );
}

export default Counter;
