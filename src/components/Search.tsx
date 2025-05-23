import { ChangeEvent, useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickDelete = () => {
    setSearchValue("");
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="relative active:scale-99">
      <svg
        className="absolute top-2 left-1.5 opacity-55 "
        width={26}
        hanging={26}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        className="py-1.5 px-9 w-md max-[1050px]:w-full border border-gray-300 rounded-2xl outline-none focus:border-gray-400 text-xl "
        type="text"
        onChange={onChangeInput}
        value={value}
        placeholder="Поиск шаурмы..."
      />
      {value && (
        <svg
          onClick={onClickDelete}
          width={15}
          height={15}
          className="absolute opacity-45 right-2.5 top-3 cursor-pointer "
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
