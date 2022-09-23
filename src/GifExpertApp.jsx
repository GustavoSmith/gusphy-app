import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const lastCategory = localStorage.getItem("lastCategory");

  const [categories, setCategories] = useState([lastCategory || ""]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories((categories) => [category, ...categories]);
  };

  return (
    <main className="flex flex-col items-center gap-4 bg-blue-500 p-16">
      <img
        src="/Gusphy-logo.png"
        alt="GUSPHY: Gifs 4 everyone"
        className="w-3/4 sm:w-1/2 md:w-1/4 xl:w-1/5"
      />
      <h1 className="sr-only">Gusphy</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </main>
  );
};

export default GifExpertApp;
