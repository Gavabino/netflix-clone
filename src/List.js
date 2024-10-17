import React from "react";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const base_url = "https://image.tmdb.org/t/p/original/";

function List({ movielist, movieListChange }) {
    if (movielist.length === 0) {
        return (
            <div className="list-container">
                <h1 className="warning">My List is Empty</h1>
            </div>
        )
    } else {
        return (
            <div className="list-container">
                {movielist.map((item) => {
                    return <ListItem movie={item} key={item.id} movielist={movielist} movieListChange={movieListChange}/>;
                })}
            </div>
        );   
    }
}

function ListItem({ movie, movielist, movieListChange }) {
    const handleClick = () => {
        movieListChange(movielist.filter(item => item !== movie));
    };
    return (
        <div className="list-item">
            <h1 className="title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <FontAwesomeIcon icon={faTrash} className="delete" onClick={handleClick}/>
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
