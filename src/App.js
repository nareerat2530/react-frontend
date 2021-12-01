import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {Producers} from  "./components/Producers"
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import Actors from "./components/Actors";
import Cinemas from "./components/Cinemas";

function App() {
  return (

      <div>
        <HashRouter>
          <NavBar/>
          <div className="content">

            <Routes>
                <Route path="/actors" element={<Actors/>}/>
                <Route path="/cinemas" element={<Cinemas/>}/>


            </Routes>
          </div>
        </HashRouter>
      </div>

  );
}

export default App;
