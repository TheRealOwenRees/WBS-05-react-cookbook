const SearchBar = ({ searchTerm, setSearchTerm }) => {

    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </>
    )
}

export default SearchBar