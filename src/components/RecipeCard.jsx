const RecipeCard = ({ id, recipe, images }) => {
    return (
        <div className="col-12 col-md-6 py-3" key={id}>
            <a href="#">
                <div>
                    <img src={images[0]} alt={recipe.title} style={
                        {
                            height: 400,
                            width: 400
                        }}/>
                </div>
                <h3 className="text-uppercase">{recipe.title}</h3>
            </a>
        </div>
    )
}

export default RecipeCard;
