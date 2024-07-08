import React from 'react';
import './keeperStyle.css';
import { Link } from 'react-router-dom';

const StockKeeper = () => {
  return (
    <React.Fragment>
        <div className="dashboard">

            <div className="sidebar">
                <h2>Stock Keeper</h2>
                <ul className="menu">
                    <li><Link style={{color:'white', textDecoration:'none'}} to={"/stockKeeperHome"}>Home</Link></li>
                    <li>Manage Stock</li>
                    <li>Records Sales</li>
                    <li><Link style={{color:'white', textDecoration:'none'}} to={"/"}>Logout</Link></li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="content">
                <h2>Welcome to the Stock Keeper Dashboard</h2>
                <p>Select an option from the menu to get started.</p>
            </div>
    </div>
    </React.Fragment>

    
  );
};

export default StockKeeper ;

