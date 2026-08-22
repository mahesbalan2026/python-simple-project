export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = numItems
    ? Math.round((numPacked / numItems) * 100)
    : 0;

  return (
    <footer className="bg-[#76c7ad] px-4 py-4 text-center text-[clamp(1.1rem,2.2vw,1.8rem)] font-semibold italic text-[#2b2b2b] shadow-[inset_0_8px_18px_rgba(255,255,255,0.2)]">
      {numItems === 0
        ? "Start adding items to your packing list."
        : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
    </footer>
  );
}
