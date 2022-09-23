import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const cleanValue = inputValue.trim();
    if (cleanValue.length < 2) return;
    onNewCategory(cleanValue);
    setInputValue("");
    localStorage.setItem("lastCategory", cleanValue);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-2">
      <input
        type="text"
        className="rounded-md border-2 border-slate-600 p-2 md:mb-6 md:w-[400px] xl:w-[600px]"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="rounded-full bg-yellow-300 px-4 py-2 font-semibold text-black"
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
};
