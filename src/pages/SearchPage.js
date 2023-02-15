import React, { useState } from "react";
import AllMovies from "../components/AllMovies";
import SearchForm from "../components/SearchForm";

const SearchPage = ({ logOut }) => {

  const [query, setQuery] = useState("");



  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <SearchForm logOut={logOut} setQuery={setQuery} />

        <AllMovies query={query} />
      </div>
    </>
  );
};

export default SearchPage;
