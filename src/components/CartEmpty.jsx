import React from "react";
import { Link } from "react-router";

const CartEmpty = () => {
  return (
    <div className="text-center mt-15">
      <h1 className="text-3xl font-extrabold mb-2.5">Корзина пустая 😕</h1>
      <p className="text-xl">Вероятней всего, вы не заказывали ещё пиццу.</p>
      <p className="text-xl mb-15">
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        className="m-auto"
        width={350}
        height={280}
        src="./CartEmpty.png"
        alt="Empty"
      />
      <Link to="/">
        <button className="mx-auto mt-5 text-white bg-stone-800 font-medium px-6.5 py-3 rounded-3xl cursor-pointer flex gap-2 transition duration-200  hover:text-gray-400 ">
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
