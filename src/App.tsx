import { Route, Routes } from "react-router";
import Container from "./components/Container";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { createContext, useState } from "react";
import FullShaurma from "./components/FullShaurma";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="mx-6">
      <Container>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shaurma/:id" element={<FullShaurma />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SearchContext.Provider>
      </Container>
    </div>
  );
}

export default App;
