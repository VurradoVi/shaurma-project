import React from "react";
import { Link } from "react-router";

const Cart = () => {
  return (
    <div className="max-w-4xl mx-auto h-[75vh] flex flex-col justify-between">
      <div className="flex items-end justify-between mb-5.5">
        <div className="flex items-center gap-2">
          <img src="./shop.svg" width={26} height={26} alt="cart" />
          <h1 className="text-3xl font-bold">Корзина</h1>
        </div>
        <div className="flex items-center gap-1 group">
          <svg
            className="w-4 h-4 text-gray-400 transition-colors duration-200 group-hover:text-red-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
          </svg>
          <button className="text-gray-400 cursor-pointer transition-colors duration-200 group-hover:text-red-600">
            Очистить корзину
          </button>
        </div>
      </div>
      <div className="overflow-auto">
        <div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-5 pb-5">
            <div className="flex items-center gap-3.5">
              <img src="./image5.png" alt="" />
              <div>
                <h3 className="text-xl font-bold">Шаурма</h3>
                <p className="text-lg">сырная, small</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="border-3 border-red-400 p-2.5 rounded-full cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  ></path>
                </svg>
              </button>
              <p className="font-bold text-xl">{2}</p>
              <button className="border-3 border-red-400 p-2.5 rounded-full cursor-pointer">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="#EB5A1E"
                  ></path>
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  ></path>
                </svg>
              </button>
            </div>
            <h3 className="font-bold text-xl">500p</h3>
            <button className="border-3 border-gray-300 p-2.5 rounded-full cursor-pointer">
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45  "
              >
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#D0D0D0"
                ></path>
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#D0D0D0"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mt-10">
          <h3 className="text-xl">
            Всего шаурмы: <strong>{5} шт.</strong>
          </h3>
          <h3 className="text-xl">
            Сумма заказа: <span className="text-red-500">{5}р.</span>
          </h3>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="group">
            <Link to="/">
              <button className=" text-gray-400 px-5.5 py-3 rounded-3xl cursor-pointer border border-gray-300 flex gap-2 transition duration-200 group-hover:border-gray-400 group-hover:text-gray-400">
                <img
                  className=" group-hover:-translate-x-1 transition duration-200"
                  src="./Path.svg"
                  alt="back"
                />
                Вернуться назад
              </button>
            </Link>
          </div>
          <button className="bg-red-500 text-white px-5.5 py-3 rounded-3xl cursor-pointer transition duration-200  hover:bg-red-400">
            Оплатить сейчас
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
