import RecipeCard from "./RecipeCard";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom"

const Homepage = ({ recipes, searchTerm, selectedCategories, setAvailableCategories }) => {

    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // todo TRY TO MAKE THIS WORK WITH DEFAULT VALUES IN STATE
    useEffect(() => {
        setFilteredRecipes(recipes)
    },[recipes])

    // todo only works for one category, fix
    useEffect(() => {
        const filtered = recipes.filter(recipe => {
            return recipe.title.toLowerCase().includes(searchTerm) && selectedCategories.every(category =>
                category.value === recipe.categories[0])
        }) // is the category referencing the ID/index somehow?
        setFilteredRecipes([...filtered])
    }, [recipes, searchTerm, selectedCategories])

    // todo MAKE THIS FUNCTION ONLY ADD ONE OF EACH CATEGORY, RATHER THAN IN FOOD CATEGORIES
    useEffect(() => {
        const categories = []
        filteredRecipes.forEach(recipe => categories.push({
            'label': recipe.categories[0],
            'value': recipe.categories[0]
        }))
        setAvailableCategories([...categories])
    }, [filteredRecipes])

    return(
        <main className="container">
            <div className="row">
                {
                    filteredRecipes.map(recipe =>
                        <RecipeCard key={recipe.id} recipe={recipe} images={recipe.imagePaths} />)
                }

            </div>
        </main>
    )
}

export default Homepage