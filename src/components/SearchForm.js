import React from "react";

function SearchForm({ logOut, setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="input-group mb-3 mt-4">
          <input type="text" className="form-control" placeholder="search movies" autoFocus onChange={(e) => setQuery(e.target.value)} />
          <button type="submit" className="btn btn-outline-secondary">Search</button>
        </form>
      </div>
      <button onClick={() => logOut()} className="btn btn-danger">
        Log Out
      </button>
    </>
  );
}

export default SearchForm;
