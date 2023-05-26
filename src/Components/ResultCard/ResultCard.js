import React from 'react'
import "./ResultCard.css";
import { useMovieContext } from '../ContextAPI/GlobalContext';

import * as actions from './../ContextAPI/ActionTypes';


const ResultCard = ({movie}) => {
    //console.log(movie); 

    const movieContext=useMovieContext();
    const storedMovie=movieContext.watchlist.find(mov=>mov.imdbID===movie.imdbID);
    const storedMovieWatched=movieContext.watched.find(mov=>mov.imdbID===movie.imdbID);

    const watchlistDisabled= storedMovie?true : storedMovieWatched?true:false;

    const watchedDisabled=storedMovieWatched?true:false;
  return (
    <div className='result-card mt-5 row'>
        <div className="poster-wrapper col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            {movie.Poster? 
            (<img src={movie.Poster} alt={movie.Title}/>)
            : (<div className='filter-Poster'> none</div>)
             }
        </div>

        <div className="movie-info col-xxl-8 col-lg-7 col-md-8 col-sm-6 col-12 py-4">
            <h3 className="movie-header">{movie.Title}</h3>
            <h4 className="movie-date">
                {movie.Year?movie.Year:"--"}
            </h4>

            <div className="movie-controls mt-0 mt-md-4 ">
                <button onClick={()=>movieContext.moviesDispatch({
                    type:actions.ADD_MOVIE_TO_WATCHLIST ,
                    payload:movie ,
                })} className="btn mr-3 text-uppercase" disabled={watchlistDisabled}>Add to WatchList</button>
                <button onClick={()=>movieContext.moviesDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHED,
                    payload:movie ,
                })} className="btn mr-3 text-uppercase" disabled={watchedDisabled}>Add to Watched</button>
            </div>
        </div>
      
    </div>
  )
}

export default ResultCard
