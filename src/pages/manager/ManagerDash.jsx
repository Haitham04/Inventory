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
                    <Link to={'/managerhome'} style={{color:'white', textDecoration:'none'}} ><li>Manager Home</li></Link> 
                    <li>Manage Transaction</li>
                    <li>View Stock</li>
                    <li>View Sales</li>
                    <li>Monitoring Stock level</li>
                    <li> <Link to={'/contact'} style={{color:'white', textDecoration:'none'}}>Contact</Link></li>
                    <li><Link style={{color:'white', textDecoration:'none'}} to={"/"}>Logout</Link></li>
                </ul>
            </div>
            <div className="content">
                <h2>Welcome to the Manager Dashboard</h2>
                <p>Select an option from the menu to get started.</p>
            </div>`
    </div>
    </React.Fragment>

    
  );
};

export default manager;

