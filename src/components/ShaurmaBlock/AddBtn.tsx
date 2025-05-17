import React from "react";

const AddBtn = ({ onClickAdd, addedCount }) => {
  return (
    <button
      onClick={onClickAdd}
      className="group flex items-center gap-1.5 font-bold text-orange-500 border border-orange-500 transition duration-200 ease-in-out hover:bg-orange-500 hover:text-gray-200 px-3 py-1.5 rounded-3xl cursor-pointer active:translate-y-0.5"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="currentColor"
        />
      </svg>{" "}
      Добавить
      {addedCount > 0 && (
        <span className="bg-orange-500 text-gray-200 transition duration-500 group-hover:bg-gray-200 group-hover:text-black   px-2 rounded-3xl ">
          {addedCount}
        </span>
      )}
    </button>
  );
};

export default AddBtn;
