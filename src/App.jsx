import './App.css';
import { useState, useEffect } from 'react';
import { useContentful } from './services/useContentful';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const { getRecipes } = useContentful();
    const [recipes, setRecipes] = useState([]);

     useEffect(() => {
      getRecipes().then(response => setRecipes(response));
    }, [])

    return (
      <div className="App">
          <Header />
          <Main recipes={recipes} />
          <Footer />
      </div>
  );
}

export default App;
