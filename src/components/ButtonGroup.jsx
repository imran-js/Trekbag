import React from "react";
import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all Items",
];
function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => (
        <Button type="secondary" key={text} text={text} />
      ))}
    </section>
  );
}

export default ButtonGroup;
