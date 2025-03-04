import React, { useState } from "react";

const ShaurmaBlock = ({ title, imageUrl, price, sizes, types }) => {
  const [activeType, setActiveactiveType] = useState(types[0]);
  const [activeSize, setActiveactiveSize] = useState(0);
  const typesCheese = ["с сыром", "без сыра"];
  return (
    <div className="flex flex-col items-center w-2xs ">
      <img className="w-3xs" src={imageUrl} alt={title} />
      <h4 className="font-extrabold text-2xl mb-5">{title}</h4>
      <div className="bg-gray-200 rounded-xl w-70">
        <div className="font-bold">
          <div className="flex justify-around items-center px-2 py-2.5">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveactiveType(type)}
                className={`w-full ${
                  activeType === type ? "bg-white" : ""
                } px-7 py-1 rounded-sm cursor-pointer`}
              >
                {typesCheese[type]}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-around px-2 pb-2.5">
            {sizes.map((size, index) => (
              <button
                key={size}
                onClick={() => setActiveactiveSize(index)}
                className={`px-6 py-1 ${
                  activeSize === index ? "bg-white" : ""
                } rounded-sm cursor-pointer`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around w-full mt-4">
        <h4 className="font-extrabold text-xl">от {price} ₽</h4>
        <button className="group flex items-center gap-1.5 font-bold text-orange-500 border border-orange-500 transition duration-500 ease-in-out hover:bg-orange-500 hover:text-gray-200 px-3 py-1.5 rounded-3xl cursor-pointer">
          <svg
            width="13"
            height="13"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="currentColor"
            />
          </svg>{" "}
          Добавить
          <span className="bg-orange-500 text-gray-200 transition duration-500 group-hover:bg-gray-200 group-hover:text-black   px-2 rounded-3xl ">
            3
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShaurmaBlock;
