import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Movie from "./Movie";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, movieList, movieListChange }) {
    const [movies, setMovies] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [active, toggleActive] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (active) {
            toggleActive(false);
        } else {
            toggleActive(true);
            setMovieInfo(movie);
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${
                            isLargeRow && "row_posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {active && (
                <Movie
                    movie={movieInfo}
                    toggled={active}
                    movieList={movieList}
                    movieListChange={movieListChange}
                />
            )}
        </div>
    );
}

export default Row;
