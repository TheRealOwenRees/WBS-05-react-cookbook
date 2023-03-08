import Navbar from "./Navbar";
import SelectCategories from "./SelectCategories";
import SearchBar from "./SearchBar";

const Header = ({availableCategories, setSelectedCategories, searchTerm, setSearchTerm, details}) => {

    return (
        <>
        <Navbar />
            <div className="container py-4">
                <div className="row align-items-baseline">
                    <div className="col-8">
                        <h2 className="text-uppercase">{details}</h2>
                    </div>
                    <div className="col-4">
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
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
    )
}

export default Header;