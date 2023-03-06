const Recipe = ({ id, recipe }) => {
    return (
        <div key={id}>
            <p>{recipe.title}</p>
        </div>
    )
}

export default Recipe;
