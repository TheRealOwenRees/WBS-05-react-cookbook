import PropTypes from "prop-types";
import Navbar from "./Navbar";
import SelectCategories from "./SelectCategories";
import SearchBar from "./SearchBar";

function Header({
  availableCategories,
  setSelectedCategories,
  searchTerm,
  setSearchTerm,
  details,
}) {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <div className="row align-items-baseline">
          <div className="col-8">
            <h2 className="text-uppercase">{details}</h2>
          </div>
          <div className="col-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SelectCategories
              availableCategories={availableCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className="col">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  availableCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  details: PropTypes.string.isRequired,
};

export default Header;
