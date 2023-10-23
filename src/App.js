import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieDescription from './MovieDescription';
import moviesData from './MoviesData';



import './App.css'; 

function App() {
 

  return (
    <div className="App">
      <h1>My Movies</h1>
      <Routes>
        <Route path="/" element={
          <div className="movie-list">
            {moviesData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        } />
        <Route path="movie/:movieId" element={<MovieDescription />} />
      </Routes>
    </div>
  );
}

export default App;
