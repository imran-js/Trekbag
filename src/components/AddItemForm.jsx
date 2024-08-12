import React, { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ handleAddItem }) {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please type something");
      inputRef.current.focus();
      return;
    }

    handleAddItem(value);
    setValue("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={value}
        onChange={onChangeHandler}
        type="text"
      />
      <Button text="Add to list" />
    </form>
  );
}

export default AddItemForm;
