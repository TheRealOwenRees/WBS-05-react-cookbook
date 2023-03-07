import RecipeCard from "./RecipeCard";
import Select from "react-select";
import {useEffect, useState} from "react";

const Main = ({ recipes }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        setFilteredRecipes(recipes)
    },[recipes])

    // MAKE THIS FUNCTION ONLY ADD ONE OF EACH CATEGORY, RATHER THAN IN FOODCATEGORIES
    useEffect(() => {
        const categories = []
        filteredRecipes.forEach(recipe => categories.push({
            'label': recipe.categories,
            'value': recipe.categories
        }))
        setAvailableCategories([...categories])
    }, [filteredRecipes])

    const handleSearchOnChange = (e) => {
        setSearchTerm(e.target.value);
        setFilteredRecipes(recipes.filter(recipe => recipe.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleCategoriesOnChange = (opt) => {
        setSelectedCategories(opt)
    };

    const foodCategories = [...availableCategories.filter((value, index) => {
            const _value = JSON.stringify(value);
                return index === availableCategories.findIndex(obj => {
                    return JSON.stringify(obj) === _value;
                })  // adds only 1 of each category to the dropdown - removes duplicates
            })]

    console.log('Available', availableCategories)
    console.log('Selected', selectedCategories)
    console.log('Dropdown', foodCategories)

    return(
        <main className="container p-4">
            <div className="row">
                <div className="col-8">
                    <h2 className="text-uppercase">4 Recipes From All Over The World</h2>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={(e) => handleSearchOnChange(e)}
                        value={searchTerm}
                    />

                    <Select
                        options={foodCategories}
                        isMulti
                        onChange={(opt) => handleCategoriesOnChange(opt)}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                                textTransform: 'capitalize',
                            }),
                            multiValue: (provided, state) => ({
                                ...provided,
                                textTransform: 'capitalize',
                            }),
                        }}
                    />
                </div>
                <div className="col">
                    <hr />
                </div>
            </div>
            <div className="row">
                {
                    filteredRecipes.map(recipe =>
                        <RecipeCard key={recipe.id} recipe={recipe} images={recipe.imagePaths} />)
                }
            </div>
        </main>
    )
}

export default Main