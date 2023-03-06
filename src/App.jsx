import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useContentful } from './useContentful';
import Recipe from "./components/Recipe";

function App() {
    const [recipies, setRecipies] = useState([]);
    const { getRecipies } = useContentful();

     useEffect(() => {
      getRecipies().then(response => setRecipies(response));
    })

    return (
      <div className="App">
          {
              recipies.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
          }
      </div>
  );
}

export default App;
