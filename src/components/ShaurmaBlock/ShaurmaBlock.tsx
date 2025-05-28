import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, CartItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router";
import AddBtn from "./AddBtn";
import { RootState } from "../../redux/store";

const typesCheese = ["с сыром", "без сыра"];

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
  const [scaleClass, setScaleClass] = useState("scale-100");
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      setHasInitialized(true);
      return;
    }

    setScaleClass("scale-115");
    const timer = setTimeout(() => setScaleClass("scale-100"), 300);

    return () => clearTimeout(timer);
  }, [activeSize, activeType]);

  let finalPrice =
    activeSize === 0
      ? price
      : activeSize === 1
      ? Math.round(price * 1.3)
      : Math.round(price * 1.7);

  if (activeType === 0) {
    finalPrice += 20;
  }

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      imageUrl,
      price: finalPrice,
      type: typesCheese[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col items-center w-2xs ">
      <Link to={`/shaurma/${id}`}>
        <img
          className="w-3xs group hover:scale-103 transition duration-400 max-[800px]:w-3xs"
          src={imageUrl}
          alt={title}
        />
        <h4 className="font-extrabold text-2xl mb-5 text-center">{title}</h4>
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
        <h4 className={`font-extrabold text-xl duration-400 ${scaleClass}`}>
          от {finalPrice} ₽
        </h4>
        <AddBtn onClickAdd={onClickAdd} addedCount={addedCount} />
      </div>
    </div>
  );
};

export default ShaurmaBlock;
