import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MoviesData from './MoviesData';




const MovieDescription = () => {
  const { movieId } = useParams();
  const movie = MoviesData.find((m) => m.id === parseInt(movieId));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      <Link to="/" className="button-link">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDescription;
