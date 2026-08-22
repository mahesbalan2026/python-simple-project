export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center gap-4 text-[clamp(1.5rem,2.8vw,2.2rem)] text-[#ffebb3]">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
        className="h-6 w-6 accent-[#e5771f]"
      />

      <span
        className={item.packed ? "text-[#d9b894] line-through" : undefined}
      >
        {item.quantity} {item.description}
      </span>

      <button
        type="button"
        onClick={() => onDeleteItem(item.id)}
        className="text-[2rem] font-bold text-[#ff5c8a]"
        aria-label={`Delete ${item.description}`}
      >
        ×
      </button>
    </li>
  );
}
