import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) return;

    onAddItems({
      id: Date.now(),
      description: description.trim(),
      quantity,
      packed: false,
    });

    setDescription("");
    setQuantity(1);
  }

  return (
    <section className="bg-[#e5771f] px-4 py-4 text-[#5a3422]">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 text-center"
      >
        <h2 className="mr-0 text-[clamp(1.2rem,3vw,2rem)] font-semibold md:mr-4">
          What do you need for your 😍 trip?
        </h2>

        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="h-12 min-w-20 rounded-full bg-[#ffebb3] px-4 text-base font-semibold outline-none"
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="h-12 min-w-[15rem] flex-1 rounded-full bg-[#ffebb3] px-5 text-base font-semibold outline-none placeholder:text-[#8b6a53]"
        />

        <button
          type="submit"
          className="h-12 rounded-full bg-[#76c7ad] px-6 text-base font-bold uppercase tracking-[0.08em] text-[#1f473a]"
        >
          Add
        </button>
      </form>
    </section>
  );
}
