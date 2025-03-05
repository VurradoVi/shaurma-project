import React, { useState } from "react";

const Sort = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ["популярности", "цене", "алфавиту"];

  const onClickList = (i) => {
    setSelected(i);
    setOpenModal(false);
  };
  return (
    <div className="relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setOpenModal(!openModal)}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            openModal
              ? "transition duration-300"
              : "rotate-180 transition duration-300"
          }
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b className="max-[750px]:hidden">Сортировка по:</b>
        <span className="text-red-400 underline decoration-dotted ">
          {list[selected]}
        </span>
      </div>
      <div
        className={`absolute top-6.5 right-0 bg-white shadow-2xl rounded-xl py-1.5 ${
          openModal ? "visible" : "hidden"
        }`}
      >
        <ul>
          {list.map((item, i) => (
            <li
              key={item}
              onClick={() => onClickList(i)}
              className={`py-2.5 px-7 hover:bg-red-400/10 cursor-pointer ${
                selected === i ? "text-red-400 bg-red-400/10 font-bold" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
