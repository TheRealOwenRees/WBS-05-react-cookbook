import './App.css';
import { useState, useEffect } from 'react';
import { useContentful } from './services/useContentful';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const { getRecipes } = useContentful();
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);

     useEffect(() => {
      getRecipes()
          .then(response => setRecipes(response));
    }, [])

    return (
      <div className="App">
          <Header
              availableCategories={availableCategories}
              setSelectedCategories={setSelectedCategories}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
          />
          <Main
              recipes={recipes}
              searchTerm={searchTerm}
              selectedCategories={selectedCategories}
              setAvailableCategories={setAvailableCategories}
          />
          <Footer />
      </div>
  );
}

export default App;
