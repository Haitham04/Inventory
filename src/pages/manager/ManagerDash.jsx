import React from 'react';
import './ManagerStyle.css';
import { Link } from 'react-router-dom';
const manager = () => {
  return (
    <React.Fragment>
        <div className="dashboard">
            <div className="sidebar">
                <h2>Manager Dashboard</h2>
                <ul className="menu">
                    <li> <Link to={'/managestock'} style={{color:'white', textDecoration:'none'}}>Manage Stock</Link></li>
                    <li> <Link to={'/recordsales'} style={{color:'white', textDecoration:'none'}}>Record Sales</Link></li>
                    <li> <Link to={'/contact'} style={{color:'white', textDecoration:'none'}}>Contact</Link></li>
                    <Link to={'/Welcome'} style={{color:'white', textDecoration:'none'}} ><li>Logout</li></Link>
                </ul>
            </div>
            <div className="content">
                <h2>Welcome to the Manager Dashboard</h2>
                <p>Select an option from the menu to get started.</p>
                <img src='Login-image.jpg' alt="Login image" class="Login-image" height="480px" width="400px" />    
            </div>`
    </div>
    </React.Fragment>

    
  );
};

export default manager;

