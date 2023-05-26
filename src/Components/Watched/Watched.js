import React from 'react';
import "./Watched.css";
import { useMovieContext } from '../ContextAPI/GlobalContext';
import MovieCard from '../MovieCard/MovieCard';

const Watched = () => {
  const movieContext=useMovieContext();

  return (
    <div className='watched'>
      <div className="container">
        <div className="headingList my-5 row">
          <h1 className='text-capitalize col-lg-9 col-md-8 col-7 mt-3 mt-sm-0'>my watched</h1>

          <div className='movie-count col-lg-3 col-md-4 col-5'>
            <h5 className='mt-md-1 mt-3 py-sm-1 py-1'>
              {movieContext.watched.length}
              {movieContext.watched.length===1?" movie":" movies"}
            </h5>
          </div>
        </div>

        {
          
            movieContext.watched.length>0
            ?<div className="movie-group card-group row my-5 mx-5 mx-sm-auto">
              {
                movieContext.watched.map((movie)=>{
                  return <MovieCard key={movie.imdbID} movie={movie} type="watched"/>
                })
              }
            </div>
            :<h2 className='no-movie text-capitalize text-center'>no movies in your list, add some!</h2>
        }
      </div>
    </div>
  )
}

export default Watched
