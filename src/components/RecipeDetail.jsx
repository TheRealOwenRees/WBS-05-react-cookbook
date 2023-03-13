import { Carousel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Markdown from "marked-react";

function RecipeDetail() {
  const location = useLocation();
  const data = location.state?.recipe;

  const recipeCarousel = data.images.map((image) => (
    <Carousel.Item
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <img
        className="d-block w-100"
        src={image.fields.file.url}
        alt={data.title}
      />
      <Carousel.Caption>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  const ingredientTable = data.ingredientList.map((ingredient) => {
    const elements = ingredient.split(/\s(?=\d)/);
    return (
      <tr>
        <td>{elements[0]}</td>
        <td>{elements[1]}</td>
      </tr>
    );
  });

  return (
    <div className="container p-4">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="row mt-2">
            <Carousel>{recipeCarousel}</Carousel>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 my-4">
          <h3>Ingredients</h3>
          <hr />
          <table className="table table-sm table-hover">
            <tbody>{ingredientTable}</tbody>
          </table>
        </div>
        <div className="col-12 col-md-6 my-4">
          <h3>Instructions</h3>
          <hr />
          <Markdown>{data.instructions}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
