
import './App.css';
import NavBar from "./components/NavBar";
import Producers from "./components/Producers"
import { HashRouter, Route, Routes } from 'react-router-dom';
import Actors from "./components/Actors";
import Movie from "./components/Movie";
import Homepage from "./components/Homepage";
import AddMovie from "./components/AddMovie"

import React from "react";





function App() {
    return (
        <div>

        <HashRouter>
                <NavBar/>

                <Routes>
                    <Route path="/" element={<Homepage/>} exact/>
                    <Route path="/actors" element={<Actors/>}/>
                    <Route path="/producers" element={<Producers/>}/>
                    <Route path="/movies" element={<Movie/>}/>
                    <Route path="/addmovie" element={<AddMovie/>}/>





                </Routes>

        </HashRouter>

        </div>



    );
}

export default App;
