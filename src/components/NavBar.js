import React from "react";
import { NavLink } from "react-router-dom";



const NavBar = (props) => {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/actors">Actors</NavLink></li>
                <li><NavLink to="/cinemas">Cinemas</NavLink></li>
            </ul>
        </div>
    )
}



export default NavBar;