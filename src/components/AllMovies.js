import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './allMovies.css'

function AllMovies({ query }) {
  const [allMovies, setAllMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const getAllMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=dc636b034935f18ec89ce9aed3974dfb"
    )
      .then((res) => res.json())
      .then((res) => setAllMovies(res.results));
  };

  const searchMovies = () => {

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=dc636b034935f18ec89ce9aed3974dfb&query=${query}&page=1`
    )
      .then((res) => res.json())
      .then((res) => setSearchedMovies(res.results));
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    searchMovies();
  }, [query])

  return (
    <>
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {query?.length > 0 ? searchedMovies?.map((item,index) => {
        return (
          <div key={index} className="all-movies">
            <div className="g-3">
              <div className="col-12 col-md-6 h-100">
                <Link to={`/movie/${item.id}`} style={{ textDecoration: "none" }}>
                  <div className="card bg-success text-white d-flex p-4 flex-column " style={{ width: "24rem" }}>
                    <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title fs-6">{item.original_title}</h5>
                      <p className="card-text movie-line ">
                        {item.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      }) :
        allMovies?.map((item, index) => {
          return (
            <div key={index} className="d-flex justify-content-center align-items-center flex-wrap">
              <Link to={`/movie/${item.id}`} style={{ textDecoration: "none" }}>
                <div className="container">
                  <div className="row g-3">
                    <div className="col-12 col-md-6 h-100">
                      <div className="card bg-success text-white d-flex p-4 m-2 flex-column " style={{ width: "24rem" }}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title fs-6">{item.original_title}</h5>
                          <p className="card-text line">
                            {item.overview}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default AllMovies;
