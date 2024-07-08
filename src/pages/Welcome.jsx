import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Home from './../assets/Home-image.jpg';
import Home2 from './../assets/Home2-image.jpg';



const Navbar = () => {
  return (
    <>
    
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Welcome to Inventory Management</h1>
      </div>
      <div className="navbar-right">
        <Link to={'/login'}><button className="login-button">Login</button></Link>
      </div>
    </nav>
    
        <img src={Home} alt="Home image" class="Home-image" height="480px" width="640px" />
        <img src={Home2} alt="Home2 image" class="Home2-image" height="480px" width="640px" />

        <footer className="footer">
        <div>
          <h3>About us</h3> 
        </div>
        </footer>
        
      </>
  );
};

export default Navbar;
