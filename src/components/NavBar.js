import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import {  Container, Nav, Navbar,} from "react-bootstrap";



const NavBar = (props) => {

    return (
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

        <Navbar collapseOnSelect  fixed="top"  bg="dark" variant="dark" expand="sm" fluid>
            <Container>
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to="/movies" className='nav-link' >Movies</Link>
                    <Link to="/actors" className='nav-link'>Actors</Link>
                    <Link to="/producers" className='nav-link'>Producers</Link>
                    <Link to="/cinemas" className='nav-link'>Cinemas</Link>
                </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}


export default NavBar;