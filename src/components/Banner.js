import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Requests";
import "./Banner.css";
import { useSelector, useDispatch } from 'react-redux';
import { setMovieList } from '/Users/gavinatkinson/Documents/Code/Netflix-Clone/netflix-clone/src/movieListSlice.js';

function Banner() {
    const [movie, setMovie] = useState();
    const movieList = useSelector((state) => state.movieList.movies); // Access movieList state
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(
                        Math.random() * (request.data.results.length - 1)
                    )
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
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
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>
    );
}

export default Banner;
