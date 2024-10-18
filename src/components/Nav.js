import React, { useEffect, useState } from "react";
import "./Nav.css";
import List from "./List";
//import { Link } from "react-router-dom";


function Nav() {
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
            {/*<Link className="my-list-link" to={"MyList"}>
                My List
            </Link>*/}
            <button className="my-list" onClick={handleClick}>
                My List
            </button>
            {active && <List />}
            <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav;
