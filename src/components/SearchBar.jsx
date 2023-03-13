function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        className="form-control recipe-search"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchBar;
