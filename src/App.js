import React, { useState, useEffect } from "react"
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import { moviesData } from "./Components/MoviesData"
import MoviesList from "./Components/MoviesList";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchInput, setSearchInput] = useState("")
  const [searchRate, setSearchRate] = useState(0)

  const AddNewMovie = (newmovie) => { setMovies([...movies, newmovie]) }


  // useEffect(() => {
  //  setMovies(moviesData)
  // }, [])


  return (
    <div className="App">
      <NavBar setSearchInput={setSearchInput} setSearchRate={setSearchRate} searchRate={searchRate} />
      <MoviesList movies={movies.filter(el =>
        el.rating >= searchRate &&
        el.name.toUpperCase().includes(searchInput.toUpperCase().trim()))} />
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
}

export default App;
