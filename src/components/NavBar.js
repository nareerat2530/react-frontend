/*
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Button } from "../UI/Button";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth <= 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

 const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            /!*id={"movies"}*!/
            onClick={closeMobileMenu}
          >
            Movie & PopCorn<i className="fas fa-video"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
              <Link

                to="/movies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Movies <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>



            <li className="nav-item">
              <Link
                to="/actors"
                className="nav-links"
                id={"actors"}
                onClick={closeMobileMenu}
              >
                Actors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/producers"
                className="nav-links"
                id={"producers"}
                onClick={closeMobileMenu}
              >
                Producers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add-movie"
                className="nav-links"

                onClick={closeMobileMenu}
              >
                Add Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  to="/add-producer"
                  className="nav-links"

                  onClick={closeMobileMenu}
              >
                Add Producer
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
};


export default NavBar;
*/
