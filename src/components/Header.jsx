import React, { useContext } from "react";
import { Link } from "react-router";
import Search from "./Search";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <header className="flex justify-between items-center gap-3.5 mb-17 border-b border-gray-200 pb-3 max-[580px]:flex-col max-[580px]:gap-3">
      <Link to="/">
        <div className="flex items-center gap-3 group">
          <img
            className="w-10 group-hover:-rotate-80 transition duration-400 ease-in-out"
            src="../logo.png"
            alt="logo"
          />
          <div>
            <h3 className="text-2xl font-black">Shaurma</h3>
            <p>самая вкусная шаурма у нас</p>
          </div>
        </div>
      </Link>
      <Search />
      <Link to="/cart">
        <button className=" bg-red-500  font-bold px-5 py-2.5 border-0 rounded-3xl cursor-pointer flex items-center justify-center gap-2 text-white active:scale-95 group">
          <span>{totalPrice}₽</span>
          <div className="w-px h-5 bg-white"></div>
          <img
            className="group-hover:animate-bounce"
            src="../shopping.svg"
            alt="cart"
          />
          <span>{totalCount}</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
