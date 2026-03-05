const SearchBar = ({ mySearch, onInputChange, onSearchSubmit, isLoading }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input
        onChange={onInputChange}
        value={mySearch}
        placeholder="Search for books..."
        disabled={isLoading}
      />
      <button className="filled-btn" type="submit" disabled={isLoading}>
        {isLoading ? "Searching..." : "SEARCH"}
      </button>
    </form>
  );
}

export default SearchBar;
