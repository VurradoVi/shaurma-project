import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShaurmaBlock from "../components/ShaurmaBlock/ShaurmaBlock";
import Skeleton from "../components/ShaurmaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorFind, setErrorFind] = useState("");

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  const order = sort.sortProperty.includes("-") ? "asc" : "desc";

  const setActiveCategories = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://67c46ab7c4649b9551b38dbe.mockapi.io/items?page=${currentPage}&limit=8&${
          categoryId !== 0 ? `category=${categoryId}` : ""
        }&sortBy=${sort.sortProperty.replace("-", "")}&order=${order}${
          searchValue ? `&search=${searchValue}` : ""
        }`
      )
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
        setErrorFind(err);
      })
      .finally(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);
  return (
    <div>
      <div className="flex items-center justify-between max-[1050px]:flex-col max-[1050px]:gap-3">
        <Categories
          categoryId={categoryId}
          setActiveCategories={setActiveCategories}
        />
        <Sort />
      </div>

      <div className="mt-9">
        <h2 className="font-extrabold text-3xl mb-6">Вся Шаурма</h2>
        <div className="grid max-[700px]:grid-cols-1 max-[1050px]:grid-cols-2 max-[1440px]:grid-cols-3 min-[1440px]:grid-cols-4 justify-items-center gap-4">
          {loading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : data.map((obj) => <ShaurmaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
