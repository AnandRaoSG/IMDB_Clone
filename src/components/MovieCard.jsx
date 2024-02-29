import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleaddtowatchList,
  handleRemoveFromwatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false;
  }

  return (
    <div
      className="h-[50vh] w-[200px] bg-cover bg-center  rounded-xl hover:scale-110 duration-150 hover:cursor-pointer shadow-2xl m-10 flex justify-between flex-col flex items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromwatchList(movieObj)}
          className="cursor-pointer flex flex-col justify-center items-center h-8 w-8 bg-gray-800/60 h-[30px] w-[30px] items-center rounded-lg m-4"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleaddtowatchList(movieObj)}
          className="cursor-pointer flex flex-col justify-center h-8 w-8 bg-gray-800/60 h-[30px] w-[30px] items-center rounded-lg m-4"
        >
          &#129505;
        </div>
      )}

      <div className="text-white flex-row  text-xl text-center w-full bg-gray-900/80 bg rounded-lg p-2 rounde-xl ">
        {" "}
        {name}{" "}
      </div>
    </div>
  );
}

export default MovieCard;
