import React, { useContext, useState } from "react";
import "./Banner.css";
import { useSelector, useDispatch } from 'react-redux';
import { setMovieList } from '/Users/gavinatkinson/Documents/Code/Netflix-Clone/netflix-clone/src/movieListSlice.js';

function Movie({ movie }) {
    const movieList = useSelector((state) => state.movieList.movies); // Access movieList state
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!movieList.includes(movie)) {
            dispatch(setMovieList([
                ...movieList.filter((item) => item !== undefined),
                movie,
            ]));
        } else {
            alert("Movie already in list");
        }
    };

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button" onClick={handleClick}>
                        My List
                    </button>
                </div>
                <h1 className="banner_description">{movie?.overview}</h1>
            </div>
        </header>
    );
}

export default Movie;
