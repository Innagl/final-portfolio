import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useEffect } from "react";

import HomePage from "./HomePage.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";
import './App.css'
import DidYouKnow from "./DidYouKnow.jsx";
import Navbar from "./Components/Navbar.jsx";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Redirect the root URL to the static projects/index.html (full page load) */}
          <Route
            path="/"
            element={<RedirectToStatic />}
          />
          <Route path="/projects/books" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/DidYouKnow" element={<DidYouKnow />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

function RedirectToStatic() {
  useEffect(() => {
    window.location.href = '/projects/index.html';
  }, []);

  return null;
}





