import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { navItems } from "./MenuItems";
import Dropdown from "./Dropdown";
import { Button } from "../UI/Button";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to="/" className="navbar-logo">
            Movie & popcorn
            <i className="fas fa-video"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item) => {
              if (item.title === "Add") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={"nav-links"}
                    >
                      {item.title}{" "}
                    </Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;