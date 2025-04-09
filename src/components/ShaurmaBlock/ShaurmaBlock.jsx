import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router";

const typesCheese = ["с сыром", "без сыра"];
const typesSize = ["small", "medium", "big"];

const ShaurmaBlock = ({ id, title, imageUrl, price, sizes, types }) => {
  const [activeType, setActiveactiveType] = useState(types[0]);
  const [activeSize, setActiveactiveSize] = useState(0);

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      type: typesCheese[activeType],
      size: typesSize[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col items-center w-2xs ">
      <Link to={`/shaurma/${id}`}>
        <img
          className="w-3xs group hover:scale-103 transition duration-400"
          src={imageUrl}
          alt={title}
        />
        <h4 className="font-extrabold text-2xl mb-5">{title}</h4>
      </Link>
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
        <button
          onClick={onClickAdd}
          className="group flex items-center gap-1.5 font-bold text-orange-500 border border-orange-500 transition duration-200 ease-in-out hover:bg-orange-500 hover:text-gray-200 px-3 py-1.5 rounded-3xl cursor-pointer active:translate-y-0.5"
        >
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
          {addedCount > 0 && (
            <span className="bg-orange-500 text-gray-200 transition duration-500 group-hover:bg-gray-200 group-hover:text-black   px-2 rounded-3xl ">
              {addedCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ShaurmaBlock;
