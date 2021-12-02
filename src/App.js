import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Producers from "./components/Producers"
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import Actors from "./components/Actors";
import Cinemas from "./components/Cinemas";
import MovieCard from "./UI/ModalCard";
import Movie from "./components/Movie";


function App() {
    return (
        <div className='content'>
        <HashRouter>
                <NavBar/>
                <Routes>

                    <Route path="/actors" element={<Actors/>}/>
                    <Route path="/producers" element={<Producers/>}/>
                    <Route path="/cinemas" element={<Cinemas/>}/>
                    <Route path="/movies" element={<Movie/>}/>

                </Routes>
        </HashRouter>
        </div>



    );
}

export default App;
