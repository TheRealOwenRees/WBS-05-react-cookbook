import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useContentful } from "./services/useContentful";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const { getRecipes } = useContentful();
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [searchPopularTerm, setSearchPopularTerm] = useState("");
  const [searchAllTerm, setSearchAllTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => setPopularRecipes(response));
  }, []);

  return (
    <div className="App">
      <Header
        availableCategories={availableCategories}
        setSelectedCategories={setSelectedCategories}
        searchTerm={searchPopularTerm}
        setSearchTerm={setSearchPopularTerm}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              recipes={popularRecipes}
              searchTerm={searchPopularTerm}
              selectedCategories={selectedCategories}
              setAvailableCategories={setAvailableCategories}
            />
          }
        />
        <Route path="recipe/:name" element={<RecipeDetail />} />
        <Route
          path="/search"
          element={<Search setSearchAllTerm={setSearchAllTerm} />}
        />
        <Route
          path="/search-results"
          element={<SearchResults searchAllTerm={searchAllTerm} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
