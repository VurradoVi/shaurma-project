import { FC, memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedSort,
  Sort,
  SortPropertyEnum,
} from "../redux/slices/filterSlice";

type ListItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  sort: Sort;
};

const list: ListItem[] = [
  { name: "популярности (убыв.)", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "популярности (возр.)", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене (убыв.)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "цене (возр.)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "алфавиту (убыв.)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "алфавиту (возр.)", sortProperty: SortPropertyEnum.TITLE_ASC },
];

const SortPopup: FC<SortPopupProps> = memo(({ sort }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  const onClickList = (i: ListItem) => {
    dispatch(setSelectedSort(i));
    setOpenModal(false);
  };

  useEffect(() => {
    const handleCkickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpenModal(false);
      }
    };

    document.body.addEventListener("click", handleCkickOutside);

    return () => document.body.removeEventListener("click", handleCkickOutside);
  }, []);
  return (
    <div className="relative" ref={sortRef}>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setOpenModal(!openModal)}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            openModal
              ? "transition duration-300"
              : "rotate-180 transition duration-300"
          }
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b className="max-[750px]:hidden">Сортировка по:</b>
        <span className="text-red-400 underline decoration-dotted ">
          {sort.name}
        </span>
      </div>
      <div
        className={`absolute top-6.5 right-0 bg-white shadow-2xl rounded-xl py-1.5 z-10 ${
          openModal ? "visible" : "hidden"
        }`}
      >
        <ul>
          {list.map((item, i) => (
            <li
              key={i}
              onClick={() => onClickList(item)}
              className={`py-2.5 px-7 hover:bg-red-400/10 cursor-pointer ${
                sort.name === item.name
                  ? "text-red-400 bg-red-400/10 font-bold"
                  : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default SortPopup;
