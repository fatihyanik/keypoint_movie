import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import App from "../App";

function MoviePage() {
  const [movie, setMovie] = useState({});

  const params = useParams();

  const findMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=dc636b034935f18ec89ce9aed3974dfb&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setMovie(res));
  };

  useEffect(() => {
    findMovie();
  }, [params]);

  console.log(movie);

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div class="card bg-success text-white p-4" style={{ width: "33rem" }}>
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <p class="card-text ">
            {movie.overview}
          </p>
        </div>
      </div>

    </div>

  );
}

export default MoviePage;
