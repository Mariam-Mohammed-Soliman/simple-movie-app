import React from "react";
import "./MovieControls.css";
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from "react-icons/ai";
import { useMovieContext } from "../ContextAPI/GlobalContext";
import * as actions from "./../ContextAPI/ActionTypes";

const MovieControls = ({ movie, type }) => {
  const movieContext = useMovieContext();

  return (
    <div className="card-title bg-light">
      {type === "watchlist" && (
        <>
          <span
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="eyeControl"
          >
            <AiFillEye />
          </span>
          <span
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
            className="deleteControl"
          >
            <AiOutlineClose />
          </span>
        </>
      )}
      {type === "watched" && (
        <>
          <span onClick={() =>
              movieContext.moviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            } className="eyeControl">
            <AiFillEyeInvisible />
          </span>
          <span onClick={() =>
              movieContext.moviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            } className="deleteControl">
            <AiOutlineClose />
          </span>
        </>
      )}
    </div>
  );
};

export default MovieControls;
