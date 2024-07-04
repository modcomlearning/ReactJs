import logo from './logo.svg';
// src/index.js or src/App.js (depending on your setup)
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
function App() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/book">Booking</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/book" element={<Booking/>} />
            </Routes>
        </div>
    </Router>
);
}

export default App;
