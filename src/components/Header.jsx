import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="../vite.svg" alt="logo" />
        <div>
          <h3 className="text-2xl font-extrabold">Shaurma</h3>
          <p>самая вкусная шаурма у нас</p>
        </div>
      </div>
      <button className="bg-red-400 p-1 border-0 rounded-md cursor-pointer">
        520p
      </button>
    </header>
  );
};

export default Header;
