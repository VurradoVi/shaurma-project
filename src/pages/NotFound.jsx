import React from "react";

const NotFound = () => {
  return (
    <div className="p-25 max-w-187 mx-auto text-center">
      <h1>
        <span className="text-6xl">😕</span>
        <br />
        <p className="text-3xl mt-1">Ничего не найдено</p>
      </h1>
      <p className="text-2xl mt-4">
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFound;
