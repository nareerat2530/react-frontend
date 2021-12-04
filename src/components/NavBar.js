import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import {  Container, Nav, Navbar,} from "react-bootstrap";
import logo from './logo.jpg'



const NavBar = () => {
    const [navLinkOpen, setNavLinkOpen] = useState(false);

    const handlerNavLinksToggle = () => {
        setNavLinkOpen(!navLinkOpen);
    };
    const renderClasses = () => {
        let classes = "navlinks"


        if(navLinkOpen) {
            classes = classes + " active"
        }
        return classes;
    };




    return (
        <nav>
            <div className='logo'>
                <img src={logo} allt='movie logo'/>
                {/*<i className="fas fa-film"></i>*/}

               {/* <h4>Movies</h4>*/}
            </div>
            <ul className={renderClasses()} >
                <li className='link'><Link to="/"  >Home</Link></li>
                <li className='link'> <Link to="/movies" onClick={handlerNavLinksToggle}>Movies</Link></li>
                <li className='link'><Link to="/actors" onClick={handlerNavLinksToggle}>Actors</Link></li>
                <li className='link'><Link to="/movieform" onClick={handlerNavLinksToggle}>MovieForm</Link></li>
                <li className='link'> <Link to="/producers" onClick={handlerNavLinksToggle}>Producers</Link></li>
            </ul>


            <div  onClick={handlerNavLinksToggle} className='hamburger-toggle'>
                <i className="fas fa-bars"></i>
            </div>


        </nav>
        /*  <div className="navbar">
              <h1>Navbar</h1>
              <ul>
                  <li><NavLink exact to="/">Movie</NavLink></li>
                  <li><NavLink to="/actors">Actors</NavLink></li>
                  <li><NavLink to="/cinemas">Cinemas</NavLink></li>
                  <li><NavLink to="/producers">Producers</NavLink></li>

              </ul>
          </div>
      )*/

        /*<Navbar collapseOnSelect    bg="dark" variant="dark" expand="sm">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to="/movies" className='nav-link' >Movies</Link>
                    <Link to="/actors" className='nav-link'>Actors</Link>
                    <Link to="/producers" className='nav-link'>Producers</Link>

                </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>*/

    )
}


export default NavBar;