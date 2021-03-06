import "./App.css";

import Producers from "./components/Producers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actors from "./components/Actors";
import Movie from "./components/Movie";
import Homepage from "./components/Homepage";
import React from "react";
import AddMovieForm from "./components/AddMovieForm";
import SignUp from "./components/sign-up";

import AddProducerForm from "./components/AddProducerForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
       {/* <NavBar />*/}
      <Navbar/>

        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/actors" element={<Actors />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/add-movie" element={<AddMovieForm />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/add-producer" element={<AddProducerForm/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
