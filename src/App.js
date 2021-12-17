
import './App.css';
import NavBar from "./components/NavBar";
import Producers from "./components/Producers"
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Actors from "./components/Actors";
import Movie from "./components/Movie";
import Homepage from "./components/Homepage";
/*import AddMovie from "./components/AddMovieForm"*/

import React from "react";
import AddMovieForm2 from "./components/AddMovieForm";





function App() {
    return (
        <div>

        <BrowserRouter>
                <NavBar/>

                <Routes>
                    <Route path="/" element={<Homepage/>} exact/>
                    <Route path="/actors" element={<Actors/>}/>
                    <Route path="/producers" element={<Producers/>}/>
                    <Route path="/movies" element={<Movie/>}/>
                    <Route path="/addmovie" element={<AddMovieForm2/>}/>





                </Routes>

        </BrowserRouter>

        </div>



    );
}

export default App;
