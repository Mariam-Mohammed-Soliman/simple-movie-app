import React from 'react';
import './MovieCard.css';
import MovieControls from '../MovieControls/MovieControls';


const MovieCard = ({movie,type}) => {

  return (
    <div className='card-wrapper col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12 mx-auto'>
        <div className="card p-0 mx-1 my-4 movieCard ">
            <div className="card-img">
        {movie.Poster? 
            (<img src={movie.Poster} alt={movie.Title}/>)
            : (<div className='filter-Poster'> none</div>)
             }
            </div>

            <MovieControls movie={movie} type={type} />
        </div>
      
    </div>
  )
}

export default MovieCard
