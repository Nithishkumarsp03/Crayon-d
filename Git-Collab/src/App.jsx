import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import About from './components/About';
import Corporation from './components/Corporation';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
   
       <div className="app">
        
    <Router>
      <div className="nav-head">
        <Navbar />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/corporation" element={<Corporation />} />
          </Routes>
        </div>
    
     
    </Router>
    </div>
  );
};

export default App;
