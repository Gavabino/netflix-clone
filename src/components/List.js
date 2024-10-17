import React, { useContext } from "react";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { setMovieList } from '/Users/gavinatkinson/Documents/Code/Netflix-Clone/netflix-clone/src/movieListSlice.js';

const base_url = "https://image.tmdb.org/t/p/original/";

function List() {
    const movieList = useSelector((state) => state.movieList.movies); // Access movieList state
    const dispatch = useDispatch();

    if (movieList.length === 0) {
        return (
            <div className="list-container">
                <h1 className="warning">My List is Empty</h1>
            </div>
        );
    } else {
        return (
            <div className="list-container">
                {movieList.map((item) => {
                    return <ListItem movie={item} key={item.id} />;
                })}
            </div>
        );
    }
}

function ListItem({ movie }) {
    const movieList = useSelector((state) => state.movieList.movies); // Access movieList state
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setMovieList(movieList.filter((item) => item !== movie)));
    };
    return (
        <div className="list-item">
            <h1 className="title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <FontAwesomeIcon
                icon={faTrash}
                className="delete"
                onClick={handleClick}
            />
            <img
                key={movie.id}
                className={`background`}
                src={`${base_url}${movie.backdrop_path}`}
                alt={movie.name}
            />
        </div>
    );
}

export default List;
