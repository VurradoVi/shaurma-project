import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartSlice";

const ShaurmaBlockCart = ({
  id,
  title,
  size,
  count,
  price,
  type,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center w-full border-t border-gray-200 pt-5 pb-5 ">
        <div className="flex items-center gap-3.5 w-[50%]">
          <img width={70} height={30} src={imageUrl} alt="shaurma" />
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg opacity-60">
              {type}, {size}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[13%]">
          <button
            onClick={() => dispatch(minusItem(id))}
            className="group border-3 border-red-400 p-2.5 rounded-full cursor-pointer transition-colors hover:bg-orange-400 "
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                className="fill-[#EB5A1E] group-hover:fill-white"
              ></path>
            </svg>
          </button>
          <p className="font-bold text-xl">{count}</p>
          <button
            onClick={() => dispatch(addItem({ id }))}
            className="group border-3 border-red-400 p-2.5 rounded-full cursor-pointer transition-colors hover:bg-orange-400 "
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                className="fill-[#EB5A1E] group-hover:fill-white"
              ></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                className="fill-[#EB5A1E] group-hover:fill-white"
              ></path>
            </svg>
          </button>
        </div>
        <h3 className="font-bold text-xl w-[33%] text-center">
          {price * count}p
        </h3>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="group border-3 border-gray-300 p-2.5 rounded-full cursor-pointer transition-colors hover:bg-gray-300 ml-auto"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-45"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              className="fill-[#D0D0D0] group-hover:fill-white"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              className="fill-[#D0D0D0] group-hover:fill-white"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShaurmaBlockCart;
