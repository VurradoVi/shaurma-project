import { useContext } from "react";
import { useEffect } from "react";
import ShaurmaBlock from "../components/ShaurmaBlock/ShaurmaBlock";
import Skeleton from "../components/ShaurmaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchShaurma } from "../redux/slices/shaurma/shaurmaSlice";

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.shaurma);

  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  const order = sort.sortProperty.includes("-") ? "asc" : "desc";

  const setActiveCategories = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getShaurma = async () => {
    dispatch(
      fetchShaurma({
        currentPage,
        categoryId,
        sort,
        order,
        searchValue,
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getShaurma();
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
        {status === "error" ? (
          <div className="m-25 mx-auto w-[580px] text-center">
            <h1 className="text-3xl font-extrabold mb-2.5">
              Шаурма is not detected
            </h1>
            <p className="text-xl">Повторите попытку позже...</p>
            <h1 className="text-9xl mt-6">😕</h1>
          </div>
        ) : (
          <div className="grid max-[700px]:grid-cols-1 max-[1050px]:grid-cols-2 max-[1440px]:grid-cols-3 min-[1440px]:grid-cols-4 justify-items-center gap-4">
            {status === "loading"
              ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
              : items.map((obj) => <ShaurmaBlock key={obj.id} {...obj} />)}
          </div>
        )}
      </div>
      {status === "success" ? (
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
