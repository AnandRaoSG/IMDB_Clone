import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from "./components/Banner";
import { useEffect, useState  } from "react";

function App() {

  let [watchlist, setwatchList] = useState([])

  let handleaddtowatchList = (movieObj) => {
    let newaddedwatchList = [...watchlist, movieObj]
    localStorage.setItem('Moviesite', JSON.stringify(newaddedwatchList))
    setwatchList(newaddedwatchList)
    console.log(newaddedwatchList)
  }

  let handleRemoveFromwatchList = (movieObj) => {
    let filteredwatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setwatchList(filteredwatchList)
    localStorage.setItem('Moviesite' , JSON.stringify(filteredwatchList))
    console.log(filteredwatchList)
  }

  useEffect(() => {
    let moviesfromLocalStorage = localStorage.getItem('Moviesite')
    if (!moviesfromLocalStorage) {
      return
    }
    setwatchList(JSON.parse(moviesfromLocalStorage))
  } , [])

  return (
    <>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<> <Banner /> <MovieList watchlist={watchlist} handleaddtowatchList={handleaddtowatchList} handleRemoveFromwatchList={handleRemoveFromwatchList} /> </>} />

          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setwatchList={setwatchList} handleRemoveFromwatchList={handleRemoveFromwatchList} />} />

          



        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
