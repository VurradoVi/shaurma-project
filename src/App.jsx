import Categories from "./components/Categories";
import Container from "./components/Container";
import Header from "./components/Header";
import ShaurmaBlock from "./components/ShaurmaBlock";
import shaurmaItems from "./assets/shaurma.json";

function App() {
  return (
    <div className="mx-6">
      <Container>
        <Header />
        <Categories />
        <div className="mt-9">
          <h2 className="font-extrabold text-3xl mb-6">Вся Шаурма</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
            {shaurmaItems.map((obj) => (
              <ShaurmaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
