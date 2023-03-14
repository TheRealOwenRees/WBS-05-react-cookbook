import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Search({ setSearchAllTerm }) {
  const recipeRef = useRef();
  // const categoryRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchAllTerm(recipeRef.current.value);
    navigate("/search-results");
  };

  return (
    <main className="container">
      <div className="row text-center">
        <div className="cols-12 text-start">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formRecipe">
              <Form.Label>Recipe search</Form.Label>
              <Form.Control type="text" placeholder="Search" ref={recipeRef} />
              <Form.Text className="text-muted">
                Search for your favourite recipe
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Categories</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categories"
                disabled
                // ref={categoryRef}
              />
              <Form.Text className="text-muted">Pick a nationality</Form.Text>
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Search;
