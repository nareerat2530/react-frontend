
import './App.css';
import NavBar from "./components/NavBar";
import Producers from "./components/Producers"
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import Actors from "./components/Actors";


import Movie from "./components/Movie";
import Homepage from "./components/Homepage";
import MovieForm from "./components/MovieForm"


function App() {
    return (
        <div className='content'>

        <HashRouter>
                <NavBar/>


                <Routes>
                    <Route path="/" element={<Homepage/>} exact/>
                    <Route path="/actors" element={<Actors/>}/>
                    <Route path="/producers" element={<Producers/>}/>
                    <Route path="/movies" element={<Movie/>}/>
                    <Route path="/movieform" element={<MovieForm/>}/>



                </Routes>

        </HashRouter>

        </div>



    );
}

export default App;
