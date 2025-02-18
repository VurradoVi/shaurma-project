import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-[1340px] mx-auto mt-3 bg-white rounded-xl px-10 py-8">
      {children}
    </div>
  );
};

export default Container;
