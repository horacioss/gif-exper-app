import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

interface Props {
  defaultCategories?: string[];
}

const GifExpertApp: React.FC<Props> = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState<string[]>(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};

export default GifExpertApp;
