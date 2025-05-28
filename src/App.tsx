import { Route, Routes } from "react-router";
import Container from "./components/Container";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import FullShaurma from "./components/FullShaurma";

interface SearchContextType {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({
  searchValue: "",
  setSearchValue: () => {
    console.warn("No provider for SearchContext");
  },
});

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="mx-6 max-[600px]:mx-2">
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
