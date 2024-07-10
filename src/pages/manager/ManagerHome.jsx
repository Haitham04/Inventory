import React from 'react';
import './ManagerHome.css';


const ManagerHome = () => {
  return (
    <div className="StockKeeperHome">
      <header className="StockKeeperHome-header">
        <h1>Welcome to Inventory Management</h1>
      </header>
      <img src='Login-image.jpg'alt="Login image" class="Login-image" height="480px" width="640px" />
      <footer className="StockKeeperHome-footer">
        <p>© 2024 Inventory Management</p>
      </footer>
    </div>
  );
};

export default ManagerHome;