import Categories from "./components/Categories";
import Container from "./components/Container";
import Header from "./components/Header";
import ShaurmaBlock from "./components/ShaurmaBlock";
import shaurmaItems from "./assets/shaurma.json";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://67c46ab7c4649b9551b38dbe.mockapi.io/items")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="mx-6">
      <Container>
        <Header />
        <Categories />
        <div className="mt-9">
          <h2 className="font-extrabold text-3xl mb-6">Вся Шаурма</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
            {data.map((obj) => (
              <ShaurmaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
