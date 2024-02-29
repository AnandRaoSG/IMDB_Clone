import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";

function MovieList({handleaddtowatchList, handleRemoveFromwatchList, watchlist}) {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNO] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNO(pageNo)
    }
    else {
      setPageNO(pageNo - 1);
    }


  };

  const handleNext = () => {
    setPageNO(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=95cf808dace058fd9f7768b37ae11a0c&language=en-US&page=${pageNo}%27;`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-8">
      <div className="font-bold text-2xl text-center ">Trending Movies</div>

      <div className="flex flex-wrap flex-row justify-around ">
        {movies.map((movieObj) => {
          return (
            <MovieCard
             key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path}
              name={movieObj.original_title} watchlist={watchlist} handleaddtowatchList={handleaddtowatchList}
              handleRemoveFromwatchList={handleRemoveFromwatchList}
            />
          );
        })}
      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default MovieList;

//  API Key from TMDM API website

// https://api.themoviedb.org/3/movie/popular?api_key=95cf808dace058fd9f7768b37ae11a0c&language=en-US&page=1%27;
