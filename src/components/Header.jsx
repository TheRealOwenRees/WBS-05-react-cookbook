import { Routes, Route } from "react-router-dom";
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
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                    />
                    <SelectCategories
                      availableCategories={availableCategories}
                      setSelectedCategories={setSelectedCategories}
                    />
                  </>
                }
              />
            </Routes>
          </div>
          <div className="col">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
