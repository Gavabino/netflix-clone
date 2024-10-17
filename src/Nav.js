import React, { useEffect, useState } from "react";
import "./Nav.css";
import List from "./List";

function Nav({ movieList, movieListChange }) {
  const [show, handleShow] = useState(false);
  const [active, toggleActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleClick = () => {
    toggleActive(!active);
    
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png"
        alt="Netflix Logo"
      />

      <button className="my-list" onClick={handleClick}>
        My List
      </button>
    {active && <List movielist={movieList} movieListChange={movieListChange}/>}
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
