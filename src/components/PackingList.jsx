import { useState } from "react";
import Item from "./Item.jsx";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <section className="flex flex-1 flex-col bg-[#5a3e2b] px-4 py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <h3 className="pb-4 text-center text-[clamp(1.4rem,2vw,1.9rem)] font-medium uppercase text-[#ffebb3]">
          List
        </h3>

        {sortedItems.length > 0 ? (
          <>
            <ul className="grid gap-x-20 gap-y-5 pb-6 sm:grid-cols-2">
              {sortedItems.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onDeleteItem={onDeleteItem}
                  onToggleItem={onToggleItem}
                />
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap justify-center gap-3 border-t border-white/20 pt-4">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-10 rounded-full bg-[#ffebb3] px-4 text-sm font-semibold text-[#5a3422] outline-none"
              >
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
              </select>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-start justify-center pt-2 text-[#ffebb3]/95" />
        )}
      </div>
    </section>
  );
}
