import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='logo'>
            <img src='https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2018/05/webwave-alternative-logo.webp' style={{
              width:'150px',
              height:'90px',
              objectFit:'fill',
              padding:'5px 0px'
             
            }}></img>
        </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">Categories</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-me" className="nav-link">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/corporation" className="nav-link">Corporation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
