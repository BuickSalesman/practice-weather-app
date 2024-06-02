//push da code down
//push da code down
//push da code down
//push da code down
//push da code down
//push da code down

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter name of city"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>Search!</button>
    </div>
  );
}
