import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeCard({ id, recipe, images }) {
  return (
    <div className="col-12 col-md-6 py-3" key={id}>
      <Link
        to={`recipe/${recipe.title.replace(/\s+/g, "-")}`}
        state={{ recipe }}
      >
        <div>
          <img
            src={images[0]}
            alt={recipe.title}
            style={{
              height: 400,
              width: 400,
            }}
          />
        </div>
        <h3 className="text-uppercase">{recipe.title}</h3>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeCard;
