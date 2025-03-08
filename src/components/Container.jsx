import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] h-auto mx-auto mt-5 bg-white rounded-xl px-12 py-8 max-[800px]:px-6 ">
      {children}
    </div>
  );
};

export default Container;
