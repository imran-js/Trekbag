import React from "react";
import Button from "./Button";

function AddItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" />
      <Button text="Add to list" />
    </form>
  );
}

export default AddItemForm;
