import { useState } from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function handleToggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#5a3e2b] text-[#ffebb3]">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </main>
  );
}
