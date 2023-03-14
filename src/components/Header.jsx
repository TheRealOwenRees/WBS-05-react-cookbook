import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SelectCategories from "./SelectCategories";
import SearchBar from "./SearchBar";

function Header({
  availableCategories,
  setSelectedCategories,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <>
      <Navbar />
      <div className="container py-2">
        <div className="row align-items-baseline">
          <div className="col-8">
            <h2 className="text-uppercase">4 Recipes From Around The World</h2>
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
