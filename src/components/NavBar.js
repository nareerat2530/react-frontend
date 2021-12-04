import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

import { Button } from "../UI/Button";



const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize',showButton)

    return (
        <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' id={"movies"} onClick={closeMenu}>Movie & Chill< i className="fas fa-video"></i></Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'><Link to="/movies" className='nav-links' id={"movies"} onClick={closeMenu}>Movies</Link></li>
                    <li className='nav-item'><Link to="/actors" className='nav-links' id={"actors"} onClick={closeMenu}>Actors</Link></li>
                  {/*  <li className='nav-item'><Link to="/movieform" className='nav-links' id={"movieform"} onClick={closeMenu}>MovieForm</Link></li>*/}
                    <li className='nav-item'><Link to="/producers" className='nav-links' id={"producers"} onClick={closeMenu}>Producers</Link></li>
                    <li className='nav-item'><Link to="/sign-up" className='nav-links-mobile' id={"sign-up"} onClick={closeMenu}>Sign Up</Link></li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button> }
            </div>

        </nav>
        </>

    )
}


export default NavBar;