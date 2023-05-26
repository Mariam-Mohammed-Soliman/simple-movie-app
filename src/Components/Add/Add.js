import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "../ResultCard/ResultCard";
const Add = () => {
  //search state for get data
  let [searchValue, setSearchValue] = useState("");

  //movies state
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    //get data from API according to search value input and show it If it existed
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=b03945e7`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content m-5">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="search"
              id=""
              placeholder="search for a movie"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>

          {/*for display data according to search in a list */}
          {movies.length > 0 ? (
            <ul className="add-result">
              {movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
                );
              })}
            </ul>
          ) : (
            <h2 className="no-movie text-center py-5 text-capitalize">no results, try to search for something!</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
