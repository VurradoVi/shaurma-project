import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, CartItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router";
import AddBtn from "./AddBtn";

const typesCheese = ["с сыром", "без сыра"];
const typesSize = ["small", "medium", "big"];

type ShaurmaBlockProps = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  sizes: string[];
  types: number[];
};

const ShaurmaBlock = ({
  id,
  title,
  imageUrl,
  price,
  sizes,
  types,
}: ShaurmaBlockProps) => {
  const [activeType, setActiveactiveType] = useState(0);
  const [activeSize, setActiveactiveSize] = useState(0);

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      imageUrl,
      price,
      type: typesCheese[activeType],
      size: typesSize[activeSize],
      count: 0,
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
        <AddBtn onClickAdd={onClickAdd} addedCount={addedCount} />
      </div>
    </div>
  );
};

export default ShaurmaBlock;
