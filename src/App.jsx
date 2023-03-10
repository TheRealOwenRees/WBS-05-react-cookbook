import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useContentful } from "./services/useContentful";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  const details = `4 Recipes From Around The World`;

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);

  return (
    <div className="App">
      <Header
        availableCategories={availableCategories}
        setSelectedCategories={setSelectedCategories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        details={details}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              recipes={recipes}
              searchTerm={searchTerm}
              selectedCategories={selectedCategories}
              setAvailableCategories={setAvailableCategories}
            />
          }
        />
        <Route path="recipe/:name" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
