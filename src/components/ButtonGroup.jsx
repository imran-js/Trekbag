import React from "react";
import Button from "./Button";

function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button
        onClick={handleMarkAllAsComplete}
        type="secondary"
        text={"Mark all as complete"}
      />
      <Button
        onClick={handleMarkAllAsIncomplete}
        type="secondary"
        text={"Mark all as incomplete"}
      />
      <Button
        onClick={handleResetToInitial}
        type="secondary"
        text={"Reset to initial"}
      />
      <Button
        onClick={handleRemoveAllItems}
        type="secondary"
        text={"Remove all Items"}
      />
    </section>
  );
}

export default ButtonGroup;
