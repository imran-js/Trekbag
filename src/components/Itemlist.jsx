function ItemList({ items, handleRemoveItem, handleToggleCheckItem }) {
  return (
    <ul>
      {items &&
        items.map((item) => (
          <Item
            handleToggleCheckItem={handleToggleCheckItem}
            handleRemoveItem={handleRemoveItem}
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  );
}

export default ItemList;

function Item({ item, handleRemoveItem, handleToggleCheckItem }) {
  return (
    <li className="item">
      <label>
        <input
          onClick={() => handleToggleCheckItem(item.id)}
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
