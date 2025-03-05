import React, { useState } from "react";
import Sort from "./Sort";

const Categories = () => {
  const [active, setActive] = useState(0);
  const items = ["Все", "Мясные", "Вегетарианская", "Острые", "В лаваше"];
  return (
    <div className="flex items-center justify-between max-[1050px]:flex-col max-[1050px]:gap-3">
      <ul className="flex gap-3 max-[800px]:overflow-auto max-[800px]:w-full text-nowrap">
        {items.map((item, index) => (
          <li
            key={item}
            className={`${
              active === index ? "bg-stone-800 text-gray-200" : "bg-gray-100"
            } px-6.5 py-2.5 rounded-3xl font-bold cursor-pointer max-[800px]:px-4 max-[800px]:py-2`}
            onClick={() => setActive(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <Sort />
    </div>
  );
};

export default Categories;
