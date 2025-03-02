import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-5 bg-white rounded-xl px-12 py-8">
      {children}
    </div>
  );
};

export default Container;
