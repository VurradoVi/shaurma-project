import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-17 border-b border-gray-200 pb-3">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img className="w-10" src="../logo.png" alt="logo" />
          <div>
            <h3 className="text-2xl font-black">Shaurma</h3>
            <p>самая вкусная шаурма у нас</p>
          </div>
        </div>
      </Link>
      <Link to="/cart">
        <button className=" bg-red-500  font-bold px-4.5 py-2.5 border-0 rounded-3xl cursor-pointer flex items-center gap-2.5 text-white">
          <span>520₽</span>
          <div className="w-px h-5 bg-white"></div>
          <img src="../shopping.svg" alt="cart" />
          <span>3</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
