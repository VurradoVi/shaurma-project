import Categories from "./components/Categories";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <div className="mx-6">
      <Container>
        <Header />
        <Categories />
      </Container>
    </div>
  );
}

export default App;
