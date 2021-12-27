import "./App.css";
import NavBar from "./components/NavBar";
import Producers from "./components/Producers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actors from "./components/Actors";
import Movie from "./components/Movie";
import Homepage from "./components/Homepage";
import React from "react";
import AddMovieForm from "./components/AddMovieForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/actors" element={<Actors />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/addmovie" element={<AddMovieForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
