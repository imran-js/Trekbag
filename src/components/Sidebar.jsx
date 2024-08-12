import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleResetToInitial={handleResetToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}

export default Sidebar;
