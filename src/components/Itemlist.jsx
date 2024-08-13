import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

function ItemList({ items, handleRemoveItem, handleToggleCheckItem }) {
  const [sortBy, setSortBy] = useState("default");
  const options = [
    { value: "default", label: "Sort By Default" },
    { value: "checked", label: "Sort By Packed" },
    { value: "unchecked", label: "Sort By Unpacked" },
  ];

  const SortedItemsList = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "checked") return b.checked - a.checked;
        if (sortBy === "unchecked") return a.checked - b.checked;
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length ? (
        <section>
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={options[0]}
            options={options}
          />
        </section>
      ) : null}
      {SortedItemsList.length ? (
        SortedItemsList.map((item) => (
          <Item
            handleToggleCheckItem={handleToggleCheckItem}
            handleRemoveItem={handleRemoveItem}
            key={item.id}
            item={item}
          />
        ))
      ) : (
        <EmptyView />
      )}
    </ul>
  );
}

export default ItemList;

function Item({ item, handleRemoveItem, handleToggleCheckItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleCheckItem(item.id)}
          type="checkbox"
          name="item"
          id="item"
          checked={item.checked}
        />
        {item.text}
      </label>
      <button
        onClick={() => {
          handleRemoveItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
