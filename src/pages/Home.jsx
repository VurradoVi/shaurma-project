import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShaurmaBlock from "../components/ShaurmaBlock/ShaurmaBlock";
import Skeleton from "../components/ShaurmaBlock/Skeleton";
import Categories from "../components/Categories";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://67c46ab7c4649b9551b38dbe.mockapi.io/items")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Categories />
      <div className="mt-9">
        <h2 className="font-extrabold text-3xl mb-6">Вся Шаурма</h2>
        <div className="grid max-[700px]:grid-cols-1 max-[1050px]:grid-cols-2 max-[1440px]:grid-cols-3 min-[1440px]:grid-cols-4 justify-items-center gap-4">
          {loading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : data.map((obj) => <ShaurmaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
