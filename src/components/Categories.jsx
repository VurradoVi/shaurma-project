import React, { useState } from "react";

const Categories = ({ categoryId, setActiveCategories }) => {
  const items = ["Все", "Мясные", "Вегетарианская", "Острые", "В лаваше"];
  return (
    <div className="max-[800px]:overflow-auto max-[800px]:w-full">
      <ul className="flex gap-3  text-nowrap">
        {items.map((item, index) => (
          <li
            key={item}
            className={`${
              categoryId === index
                ? "bg-stone-800 text-gray-200"
                : "bg-gray-100"
            } px-6.5 py-2.5 rounded-3xl font-bold cursor-pointer max-[800px]:px-4 max-[800px]:py-2`}
            onClick={() => setActiveCategories(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
