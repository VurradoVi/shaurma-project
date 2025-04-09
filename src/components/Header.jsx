import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

const Header = () => {
  const { totalPrice, items } = useSelector(selectCart);

  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

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
      {!isCartPage && <Search />}
      <Link to="/cart">
        <button className=" bg-red-500  font-bold px-6.5 py-2.5 border-0 rounded-3xl cursor-pointer flex items-center justify-center gap-2.5 text-white active:scale-95 group">
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
