import { useEffect, useState } from "react";
import { useContentful } from "../services/useContentful";
import RecipeCard from "./RecipeCard";

function SearchResults({ searchAllTerm }) {
  const { getRecipes } = useContentful();
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    getRecipes(searchAllTerm).then((response) => setFilteredRecipes(response));
  }, []);

  return (
    <main className="container">
      <div className="col-12">
        <h3 className="text-uppercase text-start">Search Results:</h3>
      </div>
      <div className="row text-center">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            images={recipe.imagePaths}
          />
        ))}
      </div>
    </main>
  );
}

export default SearchResults;
