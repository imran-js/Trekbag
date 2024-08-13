import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BckgHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/Itemlist";
import Sidebar from "./components/Sidebar";
import { InitialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || InitialItems;
  });
  const handleAddItem = (newItemText) => {
    const constructItem = {
      id: new Date().getTime(),
      text: newItemText,
      checked: false,
    };
    setItems([...items, constructItem]);
  };
  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
  };

  const handleToggleCheckItem = (id) => {
    const NewItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setItems(NewItems);
  };
  const handleRemoveAllItems = () => setItems([]);
  const handleResetToInitial = () => setItems(InitialItems);
  const handleMarkAllAsComplete = () => {
    const completedItems = items.map((item) => {
      return { ...item, checked: true };
    });

    setItems(completedItems);
  };
  const handleMarkAllAsIncomplete = () => {
    const completedItems = items.map((item) => {
      return { ...item, checked: false };
    });

    setItems(completedItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          packedItems={items.filter((item) => item.checked).length}
          itemCount={items.length}
        />
        <ItemList
          handleToggleCheckItem={handleToggleCheckItem}
          handleRemoveItem={handleRemoveItem}
          items={items}
        />
        <Sidebar
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
