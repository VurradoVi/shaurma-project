import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full min-h-[96vh] overflow-auto max-w-[1540px] mx-auto mt-5 bg-white rounded-xl px-12 py-8 max-[800px]:px-6 ">
      {children}
    </div>
  );
};

export default Container;
